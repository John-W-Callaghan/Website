document.addEventListener('DOMContentLoaded', function () {
    
    const projectData = {
        // AI & ML Projects
        'odia-ocr-code': {
            title: 'Deep Learning for OCR',
            image: 'assets/OCRODIA.png',
            description: `<p>This dissertation project focused on building a high-accuracy OCR system for the low-resource Odia script. The core challenge was the severe lack of available data.</p><p>By implementing a Convolutional Neural Network (CNN) and leveraging Transfer Learning from a pre-trained Bengali model, the system overcame data scarcity. A custom GUI was also developed to augment the dataset, which was crucial in boosting the final test accuracy to <strong>84.0%</strong>.</p>`,
            technologies: ['Python', 'TensorFlow', 'Keras', 'Tkinter', 'Deep Learning', 'Pandas'],
            github: 'https://github.com/John-W-Callaghan/OCRODIA'
        },
        // In your projectData object, replace the old 'chatbot' entry with these two:

        'chatbot-code': {
            title: 'Intelligent Chatbot for Train Services',
            image: 'assets/train.png',
            description: `<p>A group project to build a conversational AI for a train company. The chatbot helps users find the cheapest tickets by scraping the National Rail website and predicts train delays using a machine learning model.</p><p>The final Random Forest model achieved a Mean Absolute Error of just <strong>0.34 minutes</strong>, providing highly accurate real-time delay estimates.</p>`,
            technologies: ['Python', 'Scikit-learn', 'Selenium', 'spaCy', 'Tkinter', 'SQLite'],
            github: 'https://github.com/BabaRootsMg/AI-CW2-Developing-An-Intelligent-Chatbot-System' // GitHub link
        },
        'chatbot-report': {
            title: 'Intelligent Chatbot for Train Services',
            image: 'assets/train.png',
            description: `<p>A group project to build a conversational AI for a train company. The chatbot helps users find the cheapest tickets by scraping the National Rail website and predicts train delays using a machine learning model.</p><p>The final Random Forest model achieved a Mean Absolute Error of just <strong>0.34 minutes</strong>, providing highly accurate real-time delay estimates.</p>`,
            technologies: ['Python', 'Scikit-learn', 'Selenium', 'spaCy', 'Tkinter', 'SQLite'],
            reportPDF: 'assets/chatbottrain.pdf' // PDF Report link
        },
        'emotion-pred': {
            title: 'Emotion Prediction from Text',
            image: 'assets/emotionpred.png',
            description: `<p>This project uses Natural Language Processing (NLP) to predict emotions from text. A user interface was built for emotion prediction using logistic regression.</p><p>The process involved tokenization, vectorization with CountVectorizer, training a Logistic Regression model, and building an interactive GUI with Tkinter to show real-time predictions.</p>`,
            technologies: ['Python', 'Scikit-learn', 'NLTK', 'Tkinter', 'NLP'],
            github: 'https://github.com/John-W-Callaghan/Emotions_predictor'
        },
        'search-engine': {
            title: 'Video Game Search Engine',
            image: 'assets/gamesearch engine.png',
            description: `<p>This project involved building a custom search engine for video games, using HTML files as the dataset. The process covered several steps, from extracting data to implementing TF-IDF for handling search queries.</p><p>The engine uses BeautifulSoup to parse HTML, NLTK WordNet for query expansion, and Scikit-learn's TfidfVectorizer for ranking results based on cosine similarity.</p>`,
            technologies: ['Python', 'Scikit-learn', 'BeautifulSoup', 'NLTK'],
            github: 'https://github.com/John-W-Callaghan/Videogame-Search-engine'
        },
        // Web Dev & Security Projects
        'secure-blog': {
            title: 'Secure Web-Based Blog',
            image: 'assets/securewebbased.png',
            description: `<p>Developed a full-stack blog application with a strong focus on security. The project required implementing defensive coding practices to protect against the top 5 most common web vulnerabilities.</p><p>Mitigations for SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), session hijacking, and account enumeration were successfully implemented and demonstrated.</p>`,
            technologies: ['Node.js', 'PostgreSQL', 'JavaScript', 'Cybersecurity'],
            github: 'https://github.com/BabaRootsMg/DSS-UG-002'
        },
        'parking-system': {
            title: 'Parking Management System',
            image: 'assets/pARKINGSYSTEM.png',
            description: `<p>A digital car parking system designed to eliminate the hassle of searching for a parking spot, developed collaboratively by a team of five members using Agile methodology.</p><p>This full-stack application allows users to book parking spaces in advance and is built with a modern technology stack, including Node.js for the backend, PostgreSQL for the database, and Docker for containerization.</p>`,
            technologies: ['Node.js', 'PostgreSQL', 'Docker', 'JavaScript', 'Pug', 'Agile'],
            github: 'https://github.com/Anthony-de-cruz/Parking-Management-System'
        },
        'portfolio': {
            title: 'Portfolio Website',
            image: 'assets/website.png',
            description: `<p>A custom portfolio website built from the ground up to showcase my skills, projects, and achievements. The site is built with a user-friendly navigation system and features a responsive design to work across all devices.</p><p>An animated particle background was implemented with JavaScript to create a more dynamic and engaging user experience.</p>`,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/John-W-Callaghan/Portfolio'
        },
        // Data Analysis & Visualization Projects
        'med-viz': {
            title: 'Medical Data Visualizer',
            image: 'assets/codecamp.png',
            description: '<p>This project demonstrates advanced data preprocessing and visualization techniques using medical examination data, leveraging pandas, seaborn, and matplotlib to create insightful visualizations including categorical plots and a correlation heatmap.</p>',
            technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
            github: 'https://github.com/John-W-Callaghan/Data-Analysis-Projects'
        },
        'sea-level': {
            title: 'Sea Level Rise Visualizer',
            image: 'assets/codecamp.png',
            description: '<p>This project creates a comprehensive visualization of sea level rise by plotting historical data and forecasting future trends to 2050 using linear regression analysis with Python libraries like Pandas, Matplotlib, and SciPy.</p>',
            technologies: ['Python', 'Pandas', 'Matplotlib', 'SciPy'],
            github: 'https://github.com/John-W-Callaghan/Data-Analysis-Projects'
        },
        'page-views': {
            title: 'Page Views Time Series Analyzer',
            image: 'assets/codecamp.png',
            description: '<p>This data visualization project focuses on analyzing the page views of the FreeCodeCamp forum. The project demonstrates data cleaning by removing outliers and creating line plots, bar plots, and box plots to identify trends and seasonality.</p>',
            technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
            github: 'https://github.com/John-W-Callaghan/Data-Analysis-Projects'
        },
        'demo-analysis': {
            title: 'Demographic Data Analyzer',
            image: 'assets/codecamp.png',
            description: '<p>This project features a comprehensive function that performs in-depth analysis on a demographic dataset using pandas, extracting various insights like race representation, education levels, and earnings statistics.</p>',
            technologies: ['Python', 'Pandas', 'NumPy'],
            github: 'https://github.com/John-W-Callaghan/Data-Analysis-Projects'
        },
        // Python & Scientific Computing
        'arithmetic': {
            title: 'Arithmetic Formatter',
            image: 'assets/codecamp.png',
            description: '<p>A Python function to neatly format and arrange multiple arithmetic problems in a visually appealing way, with robust error handling for input validation.</p>',
            technologies: ['Python', 'String Manipulation'],
            github: 'https://github.com/John-W-Callaghan/Scientific-Computing-Projects'
        },
        'time-calc': {
            title: 'Time Calculator',
            image: 'assets/codecamp.png',
            description: '<p>A function to add a given duration to a start time, correctly handling complex scenarios like AM/PM transitions and changes in the day of the week.</p>',
            technologies: ['Python', 'Time Calculation'],
            github: 'https://github.com/John-W-Callaghan/Scientific-Computing-Projects'
        },
        'budget-app': {
            title: 'Budget App',
            image: 'assets/codecamp.png',
            description: '<p>An object-oriented Python app for managing budgets across different categories. It includes methods for deposits, withdrawals, transfers, and a function to visualize spending in a text-based bar chart.</p>',
            technologies: ['Python', 'OOP'],
            github: 'https://github.com/John-W-Callaghan/Scientific-Computing-Projects'
        },
        'poly-calc': {
            title: 'Polygon Area Calculator',
            image: 'assets/codecamp.png',
            description: '<p>An object-oriented program that uses a Rectangle class and an inherited Square class to calculate properties like area, perimeter, and diagonal, demonstrating key OOP principles.</p>',
            technologies: ['Python', 'OOP', 'Geometry'],
            github: 'https://github.com/John-W-Callaghan/Scientific-Computing-Projects'
        },
         // Academic Reports
        'odia-ocr-report': {
            title: 'Deep Learning for OCR',
            image: 'assets/OCRODIA.png',
            description: `<p>This dissertation project focused on building a high-accuracy OCR system for the low-resource Odia script. The core challenge was the severe lack of available data.</p><p>By implementing a Convolutional Neural Network (CNN) and leveraging Transfer Learning from a pre-trained Bengali model, the system overcame data scarcity. A custom GUI was also developed to augment the dataset, which was crucial in boosting the final test accuracy to <strong>84.0%</strong>.</p>`,
            technologies: ['Python', 'TensorFlow', 'Keras', 'Tkinter', 'Deep Learning'],
            reportPDF: 'assets/ocrodia.pdf'
        },
        'mnist': {
            title: 'MNIST Classifier Analysis',
            image: 'assets/mnist.png',
            description: `<p>This project evaluates the performance of three supervised learning algorithms—Random Forest, K-Nearest Neighbors (K-NN), and Support Vector Machines (SVM)—on the MNIST dataset of handwritten digits.</p><p>The methodology involved using 5-fold cross-validation and hyperparameter tuning to optimize and compare the effectiveness of each classifier.</p>`,
            technologies: ['Python', 'Scikit-learn', 'Random Forest', 'K-NN', 'SVM'],
            reportPDF: 'assets/classifiers.pdf'
        },
        'cyber-report': {
            title: 'Cybersecurity Policies Report',
            image: 'assets/policys.png',
            description: `<p>A formal research report exploring the crucial role and importance of security policies within modern organizations.</p><p>The report covers why security policies are essential for defending against cyber threats, ensuring compliance, and guiding employees in maintaining a secure working environment. It also discusses various security frameworks and best practices for their implementation.</p>`,
            technologies: ['Research', 'Technical Writing', 'Cybersecurity'],
            reportPDF: 'assets/cyber.pdf'
        }
    };

    // --- Modal Functionality ---
    const modal = document.getElementById('projectModal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalLinkButton = document.getElementById('modalGithubLink');

    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) {
            console.error('Project data not found for ID:', projectId);
            return;
        }

        modalTitle.textContent = data.title;
        modalImage.src = data.image;
        modalDescription.innerHTML = data.description;
        
        if (data.reportPDF) {
            modalLinkButton.href = data.reportPDF;
            modalLinkButton.textContent = 'View Report →';
            modalLinkButton.style.display = 'inline-block';
        } else if (data.github) {
            modalLinkButton.href = data.github;
            modalLinkButton.textContent = 'View on GitHub →';
            modalLinkButton.style.display = 'inline-block';
        } else {
            modalLinkButton.style.display = 'none';
        }

        modalTech.innerHTML = '';
        if (data.technologies && data.technologies.length > 0) {
            data.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.textContent = tech;
                modalTech.appendChild(techTag);
            });
        }
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.querySelectorAll('.project-card .btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    if(modalCloseButton) modalCloseButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // --- Accordion Functionality ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const accordionContent = header.nextElementSibling;
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        });
    });

    // --- Mobile Nav Hamburger ---
    const hamburger = document.getElementById('hamburger');
    const mainNavLinks = document.getElementById('mainNavLinks');
    if (hamburger && mainNavLinks) {
        hamburger.addEventListener('click', () => {
            mainNavLinks.classList.toggle('open');
        });
    }
});

// --- Search Filter Function ---
function filterProjects() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const projects = item.querySelectorAll('.project-card');
        let hasVisibleProject = false;
        projects.forEach(project => {
            const title = project.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchInput)) {
                project.style.display = 'flex';
                hasVisibleProject = true;
            } else {
                project.style.display = 'none';
            }
        });
        if (hasVisibleProject) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        if (searchInput === "") {
            item.style.display = 'block';
            projects.forEach(project => {
                project.style.display = 'flex';
            });
        }
    });
}