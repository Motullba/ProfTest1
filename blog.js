// Sample blog data
const blogData = [
//   {
//       id: 1,
//       title: "", // title
//       excerpt: "", //info
//       category: "", //category
//       image: "", //img
//       date: "", // Date

//   },

    
];

// DOM Elements
const blogPostsContainer = document.getElementById('blogPostsContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterTags = document.querySelectorAll('.filter-tag');

// Current filter state
let currentFilter = 'all';
let currentSearchTerm = '';

// Initialize the blog
function initBlog() {
    renderBlogPosts(blogData);
    setupEventListeners();
}

// Render blog posts
function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';

    if (posts.length === 0) {
        blogPostsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>No blog posts found</h4>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    posts.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.className = 'col-md-12 my-5';
        blogPost.innerHTML = `
            <div class="card blog-card h-100">
                <div class ="img-container">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                </div>
                <div class="card-body">
                    <span class="category-badge">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.excerpt}</p>
                    <a href="#" class="read-more">Read more <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="card-footer">
                    <div class="date">${post.date}</div>
                </div>
            </div>
        `;
        blogPostsContainer.appendChild(blogPost);
    });
}

// Filter and search blog posts
function filterBlogPosts() {
    let filteredPosts = blogData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === currentFilter);
    }

    // Apply search term
    if (currentSearchTerm) {
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.author.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
        );
    }

    renderBlogPosts(filteredPosts);
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchButton.addEventListener('click', () => {
        currentSearchTerm = searchInput.value.trim();
        filterBlogPosts();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.trim();
            filterBlogPosts();
        }
    });

    // Filter tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentFilter = tag.dataset.category;
            filterBlogPosts();
        });
    });
}

// Initialize the blog when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlog);