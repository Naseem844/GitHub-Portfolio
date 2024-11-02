/*======================typing text========================== */

    document.addEventListener("DOMContentLoaded",()=>{
        new Typed(".typing",{
            strings:["Web Designer","React Developer","MERN Developer"],
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
            //  if(scrollY <=600)
            //     {
            //         current="home";
            //     }
            //     else if(scrollY <=2000)
            //     {
            //         current="about";

            //     }
            //     else if(scrollY <=2800)
            //     {
            //             current="services";
    
            //     }
            //     else if(scrollY <=3600)
            //     {
            //                 current="portfolio";
        
            //     }
            //     else{current="contact"}




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