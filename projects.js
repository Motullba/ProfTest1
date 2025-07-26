 // Project image data - replace with your actual image URLs
        const projects = {
            1: [
                "/dist/imgs/Project2-imgs/هويه الضحي/7.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/color1.png",
                "/dist/imgs/Project2-imgs/هويه الضحي/color2.png",
                "/dist/imgs/Project2-imgs/هويه الضحي/color3.png",
                "/dist/imgs/Project2-imgs/هويه الضحي/color4.png",
                "/dist/imgs/Project2-imgs/هويه الضحي/color5.png",
                "/dist/imgs/Project2-imgs/هويه الضحي/3.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/2.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/1.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/5.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/8.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/9.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/4.jpg",
                "/dist/imgs/Project2-imgs/هويه الضحي/6.jpg"
            ],
            2: [
                "https://source.unsplash.com/random/300x200?21",
                "https://source.unsplash.com/random/300x200?22",
                "https://source.unsplash.com/random/300x200?23",
                "https://source.unsplash.com/random/300x200?24",
                "https://source.unsplash.com/random/300x200?25",
                "https://source.unsplash.com/random/300x200?26",
                "https://source.unsplash.com/random/300x200?27",
                "https://source.unsplash.com/random/300x200?28",
                "https://source.unsplash.com/random/300x200?29",
                "https://source.unsplash.com/random/300x200?210",
                "https://source.unsplash.com/random/300x200?211",
                "https://source.unsplash.com/random/300x200?212",
                "https://source.unsplash.com/random/300x200?213",
                "https://source.unsplash.com/random/300x200?214"
            ],
            3: [
                "https://source.unsplash.com/random/300x200?31",
                "https://source.unsplash.com/random/300x200?32",
                "https://source.unsplash.com/random/300x200?33",
                "https://source.unsplash.com/random/300x200?34",
                "https://source.unsplash.com/random/300x200?35",
                "https://source.unsplash.com/random/300x200?36",
                "https://source.unsplash.com/random/300x200?37",
                "https://source.unsplash.com/random/300x200?38",
                "https://source.unsplash.com/random/300x200?39",
                "https://source.unsplash.com/random/300x200?310",
                "https://source.unsplash.com/random/300x200?311",
                "https://source.unsplash.com/random/300x200?312",
                "https://source.unsplash.com/random/300x200?313",
                "https://source.unsplash.com/random/300x200?314"
            ],
            4: [
                "https://source.unsplash.com/random/300x200?41",
                "https://source.unsplash.com/random/300x200?42",
                "https://source.unsplash.com/random/300x200?43",
                "https://source.unsplash.com/random/300x200?44",
                "https://source.unsplash.com/random/300x200?45",
                "https://source.unsplash.com/random/300x200?46",
                "https://source.unsplash.com/random/300x200?47",
                "https://source.unsplash.com/random/300x200?48",
                "https://source.unsplash.com/random/300x200?49",
                "https://source.unsplash.com/random/300x200?410",
                "https://source.unsplash.com/random/300x200?411",
                "https://source.unsplash.com/random/300x200?412",
                "https://source.unsplash.com/random/300x200?413",
                "https://source.unsplash.com/random/300x200?414"
            ]
        };

        // Get all div containers
        const divs = [
            document.querySelector('.div1'),
            document.querySelector('.div7'),
            document.querySelector('.div8'),
            document.querySelector('.div9'),
            document.querySelector('.div10'),
            document.querySelector('.div11'),
            document.querySelector('.div14'),
            document.querySelector('.div15'),
            document.querySelector('.div16'),
            document.querySelector('.div20'),
            document.querySelector('.div21'),
            document.querySelector('.div22'),
            document.querySelector('.div23'),
            document.querySelector('.div24')
        ];

        // Get project buttons
        const projectButtons = document.querySelectorAll('.project-btn');

        // Function to load images for a project
        function loadProject(projectId) {
            const images = projects[projectId];
            
            divs.forEach((div, index) => {
                // Clear previous content
                div.innerHTML = '';
                
                // Create and append img element
                const img = document.createElement('img');
                img.src = images[index];
                img.alt = `Project ${projectId} Image ${index + 1}`;
                div.appendChild(img);
            });
            
            // Update active button
            projectButtons.forEach(btn => {
                btn.classList.remove('active');
                if(btn.dataset.project === projectId) {
                    btn.classList.add('active');
                }
            });
        }

        // Load first project by default
        loadProject('1');

        // Add click event listeners to project buttons
        projectButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                loadProject(btn.dataset.project);
            });
        });