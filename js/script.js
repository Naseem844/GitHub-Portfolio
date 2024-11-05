/*======================typing text========================== */

    document.addEventListener("DOMContentLoaded",()=>{
        new Typed(".typing",{
            strings:["Web Developer","React Developer","MERN Developer"],
            typeSpeed:100,
            BackSpeed:60,
            loop:true
        })
    })
    
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav a');
            const sections = document.querySelectorAll('section'); // Assuming each link corresponds to a section
        
            function setActiveLink(id) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
    
        // Function to check which section is in view
        function checkSections() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });


            setActiveLink(current);
        }
    
        // Set active link on page load
        checkSections();
    
        // Update active link on scroll
        window.addEventListener('scroll', checkSections);
    
        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Allow default link behavior
                setActiveLink(this.getAttribute('href').substring(1));
            });
        });
    });

    //toggle a hamburger button 
    function toggleAside() {
        const asideBar = document.getElementById('asideBar');
        const leftSwitcher = document.getElementById('leftSwitcher');
    
        // Check if the aside is currently hidden
        if (asideBar.style.left === '-270px' || asideBar.style.left === '') {
            asideBar.style.left = '0'; // Show aside
            leftSwitcher.classList.remove('show'); // Hide switcher movement
        } else {
            asideBar.style.left = '-270px'; // Hide aside
            leftSwitcher.classList.add('show'); // Show switcher movement
        }
        leftSwitcher.classList.add('hide');

    }

    // hiding the aside naviation bar after clicking 
    function hideAside() {
        const asideBar = document.getElementById('asideBar');
        const leftSwitcher = document.getElementById('leftSwitcher');
        
        if(window.innerWidth<=1190)
            {

                asideBar.style.left = '-270px'; // Hide aside
                leftSwitcher.classList.add('show'); // Show the hamburger icon again
            }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav a');
        
        // Set up event listeners for each navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hideAside(); // Hide the aside on click of any nav link
            });
        });
    });