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
                "/dist/imgs/Project2-imgs/mtm/14.png",
                "/dist/imgs/Project2-imgs/mtm/color1.png",
                "/dist/imgs/Project2-imgs/mtm/color2.png",
                "/dist/imgs/Project2-imgs/mtm/color3.png",
                "/dist/imgs/Project2-imgs/mtm/color4.png",
                "/dist/imgs/Project2-imgs/mtm/color5.png",
                "/dist/imgs/Project2-imgs/mtm/1.jpg",
                "/dist/imgs/Project2-imgs/mtm/5.jpg",
                "/dist/imgs/Project2-imgs/mtm/6.jpg",
                "/dist/imgs/Project2-imgs/mtm/2.jpg",
                "/dist/imgs/Project2-imgs/mtm/7.jpg",
                "/dist/imgs/Project2-imgs/mtm/8.jpg",
                "/dist/imgs/Project2-imgs/mtm/4.jpg",
                "/dist/imgs/Project2-imgs/mtm/3.jpg"
            ],
            3: [
                "/dist/imgs/Project2-imgs/الجوري/10.jpg",
                "/dist/imgs/Project2-imgs/الجوري/color1.png",
                "/dist/imgs/Project2-imgs/الجوري/color2.png",
                "/dist/imgs/Project2-imgs/الجوري/color3.png",
                "/dist/imgs/Project2-imgs/الجوري/color4.png",
                "/dist/imgs/Project2-imgs/الجوري/color5.png",
                "/dist/imgs/Project2-imgs/الجوري/4.jpg",
                "/dist/imgs/Project2-imgs/الجوري/6.jpg",
                "/dist/imgs/Project2-imgs/الجوري/7.jpg",
                "/dist/imgs/Project2-imgs/الجوري/1.jpg",
                "/dist/imgs/Project2-imgs/الجوري/9.jpg",
                "/dist/imgs/Project2-imgs/الجوري/8.jpg",
                "/dist/imgs/Project2-imgs/الجوري/3.jpg",
                "/dist/imgs/Project2-imgs/الجوري/2.jpg"
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