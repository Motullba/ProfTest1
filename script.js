// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      const counter = entry.target.querySelector('.counter-number');
      const targetValue = getTargetValue(counter.id);
      const prefix = counter.id === 'counter1' ? '+' : '';
      animateCounter(counter, targetValue, prefix);
      observer.unobserve(entry.target); // Stop observing after triggering

    }
  })
}, observerOptions);

  document.querySelectorAll('.outline-circle').forEach(circle => {
    observer.observe(circle);
  });

  function getTargetValue(id) {
    const values = {
      'counter1': 800,
      'counter2': 7,
      'counter3': 1264
    };
    return values[id] || 0;
  }

  function animateCounter(element, target, prefix = '') {
    const duration = 2000;
    const start = parseInt(element.textContent) || 0;
    const increment = target / (duration / 16);
    
    let current = start;
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = prefix + Math.floor(current) + (element.id === 'counter3' ? '' : '');
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = prefix + target + (element.id === 'counter3' ? '' : '');
      }
    };
    
    updateCounter();
  }
;
  // Alternative: Initialize when scrolled into view
    function initCountersWhenVisible() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            if (!counter._animated) { // Prevent re-animation
              animateCounter(counter, target);
              counter._animated = true;
            }
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('.counter').forEach(counter => {
        observer.observe(counter);
      });
    }
    document.addEventListener('DOMContentLoaded', initCountersWhenVisible);
    

// Mobile menu close on link click
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse")
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap.Collapse(navbarCollapse)
      bsCollapse.hide()
    }
  })
})

// Smooth reveal animation for sections
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")
      }
    })
  },
  { threshold: 0.1 },
)

document.querySelectorAll("section").forEach((section) => {
  revealObserver.observe(section)
})


// animations

class AnimationController {
  constructor(options = {}) {
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      animateOnce: true,
      ...options
    };
    
    this.observer = null;
    this.animatedElements = new Set();
    this.init();
  }
  
  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        this.options
      );
      
      document.querySelectorAll('[data-animate]').forEach(el => {
        this.observer.observe(el);
      });
    } else {
      this.fallbackAnimation();
    }
    
    // Initialize hover animations
    this.initHoverAnimations();
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateIn(entry.target);
        
        if (this.options.animateOnce) {
          this.observer.unobserve(entry.target);
        }
      } else if (!this.options.animateOnce) {
        this.animateOut(entry.target);
      }
    });
  }
  
  animateIn(element) {
    if (this.animatedElements.has(element)) return;
    
    this.animatedElements.add(element);
    element.classList.add('active');
    
    // Handle animation end for cleanup
    const handleEnd = () => {
      element.removeEventListener('animationend', handleEnd);
      element.removeEventListener('transitionend', handleEnd);
    };
    
    element.addEventListener('animationend', handleEnd);
    element.addEventListener('transitionend', handleEnd);
  }
  
  animateOut(element) {
    element.classList.remove('active');
  }
  
  initHoverAnimations() {
    document.querySelectorAll('[data-hover-animation]').forEach(el => {
      const animationClass = el.dataset.hoverAnimation;
      
      el.addEventListener('mouseenter', () => {
        el.classList.add(animationClass);
      });
      
      el.addEventListener('mouseleave', () => {
        el.classList.remove(animationClass);
      });
    });
  }
  
  fallbackAnimation() {
    document.querySelectorAll('[data-animate]').forEach(el => {
      setTimeout(() => {
        this.animateIn(el);
      }, 100);
    });
  }
  
  // Public method to manually trigger animation
  triggerAnimation(element) {
    if (element instanceof Element) {
      this.animateIn(element);
    } else if (typeof element === 'string') {
      document.querySelectorAll(element).forEach(el => {
        this.animateIn(el);
      });
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.animationController = new AnimationController();
});

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

$('body').scrollspy({ target: '#nav' });