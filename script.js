// 檢查 config 是否已定義
if (typeof config === 'undefined') {
    console.error('config 未定義，請確保 config.js 已正確加載');
}

// 平滑滾動效果
document.querySelectorAll('span[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 加載動畫
setTimeout(() => {
    document.body.classList.add('loaded');
}, 300);

// 聯繫表單提交
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 顯示表單提交動畫
        this.classList.add('submitting');
        
        // 在這裡您可以添加表單提交邏輯，例如通過AJAX發送表單數據
        setTimeout(() => {
            // 顯示確認信息
            this.classList.remove('submitting');
            this.classList.add('submitted');
            
            // 添加成功提示
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> 感謝您的訊息！我將盡快回覆您。';
            this.appendChild(successMessage);
            
            // 重置表單
            setTimeout(() => {
                this.reset();
                this.classList.remove('submitted');
                setTimeout(() => {
                    successMessage.remove();
                }, 500);
            }, 3000);
        }, 1500);
    });
}

// 添加頁面載入動畫樣式
const loadStyle = document.createElement('style');
loadStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    form.submitting {
        position: relative;
        pointer-events: none;
    }
    
    form.submitting::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-md);
    }
    
    form.submitting::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 3px solid var(--primary-color);
        border-top-color: transparent;
        border-radius: 50%;
        z-index: 10;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    
    .success-message {
        background-color: #e7f7ee;
        color: #2e7d52;
        padding: 15px;
        margin-top: 20px;
        border-radius: var(--radius-md);
        text-align: center;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease forwards;
    }
    
    .success-message i {
        margin-right: 8px;
        font-size: 1.2rem;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(loadStyle);

// 滾動時的動畫效果
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const revealElements = document.querySelectorAll('.reveal-element');
    const windowHeight = window.innerHeight;
    
    function handleReveal(elements, offset = 150) {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - offset) {
                element.classList.add('visible');
            }
        });
    }
    
    handleReveal(sections);
    handleReveal(revealElements, 100);
}

// 初始檢查
revealOnScroll();

// 滾動時檢查
window.addEventListener('scroll', revealOnScroll);

// 添加可見性樣式
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .reveal-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
        transition-delay: var(--delay, 0s);
    }
    
    .reveal-element.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// 為時間線、項目卡片和技能添加動畫延遲
function setStaggeredAnimations() {
    // 時間線動畫
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('reveal-element');
        item.style.setProperty('--delay', `${0.2 * (index + 1)}s`);
    });
    
    // 項目卡片動畫
    document.querySelectorAll('.project-card').forEach((item, index) => {
        item.classList.add('reveal-element');
        item.style.setProperty('--delay', `${0.15 * (index + 1)}s`);
    });
    
    // 技能分類動畫
    document.querySelectorAll('.skill-category').forEach((item, index) => {
        item.classList.add('reveal-element');
        item.style.setProperty('--delay', `${0.15 * (index + 1)}s`);
    });
    
    // 技能標籤動畫
    document.querySelectorAll('.skill-tags span').forEach((item, index) => {
        item.classList.add('reveal-element');
        item.style.setProperty('--delay', `${0.05 * (index + 1)}s`);
    });
    
    // 聯繫項目動畫
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.classList.add('reveal-element');
        item.style.setProperty('--delay', `${0.15 * (index + 1)}s`);
    });
}

// 設置動畫延遲
setStaggeredAnimations();

// 根據滾動位置更新活動導航連結
function updateActiveLink() {
    const navLinks = document.querySelectorAll('nav a, nav span[href], nav span[data-href]');
    const sections = document.querySelectorAll('section[id]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || link.getAttribute('data-href');
        link.classList.toggle('active', href === currentSection);
    });
}

// 初始化活動連結
updateActiveLink();

// 滾動時更新活動連結
window.addEventListener('scroll', updateActiveLink);

// 添加鼠標懸停效果
const projectCards = document.querySelectorAll('.project-card');
const skillTags = document.querySelectorAll('.skill-tags span');

function addHoverEffects() {
    // 項目卡片懸停效果
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // 技能標籤懸停效果
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// 添加懸停效果
addHoverEffects();

// 滾動到視窗中的動畫效果
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// 動畫元素
const animElements = document.querySelectorAll('.anim');
animElements.forEach(el => {
    observer.observe(el);
});

// 導航欄滾動效果
const header = document.querySelector('header');

// 滾動時更新導航欄和導航高亮
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
    
    // 滾動時縮小導航欄
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // 執行其他滾動效果函數
    revealOnScroll();
    fadeInOnScroll();
});

// 打字機效果
function setupTypewriter(text, element) {
    const typewriter = element;
    const textToType = text;
    const originalWidth = typewriter.offsetWidth; // 獲取元素原始寬度
    let i = 0;
    let isDeleting = false;
    let currentText = '';

    function typeText() {
        if (!isDeleting && i < textToType.length) {
            // 添加字符
            currentText += textToType.charAt(i);
            typewriter.textContent = currentText;
            i++;
            setTimeout(typeText, 80); // 調整打字速度
        } else if (!isDeleting && i >= textToType.length) {
            // 完成打字，添加閃爍效果
            typewriter.classList.add('blink');
            // 等待後開始刪除
            setTimeout(() => {
                typewriter.classList.remove('blink');
                isDeleting = true;
                typeText();
            }, 2000);
        } else if (isDeleting && currentText.length > 0) {
            // 刪除字符
            currentText = currentText.slice(0, -1);
            typewriter.textContent = currentText;
            setTimeout(typeText, 40); // 刪除速度比打字快
        } else {
            // 重置並重新開始
            isDeleting = false;
            i = 0;
            setTimeout(typeText, 500);
        }
    }

    // 設置初始文本和寬度
    typewriter.style.opacity = '1';
    
    // 開始動畫
    typeText();
}

// 啟動打字機效果
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    // 獲取data屬性的值，如果沒有則使用默認文本
    const textToType = typingElement.getAttribute('data-text') || 'Building AI systems that make an impact';
    setupTypewriter(textToType, typingElement);
}

// 增強項目卡片和技能標籤的懸停效果
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});

// 增強技能標籤懸停效果
const metaTags = document.querySelectorAll('.meta-tags span, .project-tech span');
metaTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.classList.add('hover');
    });
    tag.addEventListener('mouseleave', () => {
        tag.classList.remove('hover');
    });
});

// 添加技能標籤懸停效果
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.classList.add('hover');
    });
    tag.addEventListener('mouseleave', () => {
        tag.classList.remove('hover');
    });
});

// 聯繫表單增強提交處理
const contactFormEnhanced = document.querySelector('#contactForm');
if (contactFormEnhanced) {
    contactFormEnhanced.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 這裡添加表單驗證和處理邏輯
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // 顯示通知 (在實際應用中這裡應該發送API請求)
        showNotification('訊息已發送！我們將盡快與您聯絡。', 'success');
        
        // 重置表單
        this.reset();
    });
}

// 通知函數
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 顯示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 3秒後隱藏通知
    setTimeout(() => {
        notification.classList.remove('show');
        // 完全移除
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 在滾動時添加淡入效果
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// 初始檢查和滾動監聽器
fadeInOnScroll();

// 數字增長動畫
function animateValue(obj, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 在適當的時機啟動數字動畫
const statValues = document.querySelectorAll('.stat-value');
if (statValues.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const value = entry.target;
                // 檢查是否有data-value屬性，若沒有則使用內部文本
                const endValue = value.getAttribute('data-value') 
                    ? parseInt(value.getAttribute('data-value'), 10) 
                    : parseInt(value.textContent.replace(/[^\d]/g, ''), 10);
                // 將原始內容保存，這樣數值動畫結束後可以恢復包含%或x的後綴
                const originalText = value.textContent;
                const suffix = originalText.replace(/[\d.]+/g, '');
                
                animateValue(value, 0, endValue, 1500, suffix);
                statsObserver.unobserve(value);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(value => statsObserver.observe(value));
}

// 移動裝置導航菜單
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav a, nav span[href], nav span[data-href]');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
    
    // 點擊導航後關閉菜單
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mobileNav.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });
    });
}

// 添加CSS動畫類
document.head.insertAdjacentHTML('beforeend', `
<style>
    /* 預設隱藏所有動畫元素 */
    .anim {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    /* 顯示動畫元素 */
    .anim.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* 添加延遲以創建階梯式動畫 */
    .anim-delay-1 { transition-delay: 0.1s; }
    .anim-delay-2 { transition-delay: 0.2s; }
    .anim-delay-3 { transition-delay: 0.3s; }
    .anim-delay-4 { transition-delay: 0.4s; }
    .anim-delay-5 { transition-delay: 0.5s; }
    
    /* 滾動時導航欄變小 */
    header {
        transition: all 0.3s ease;
    }
    
    header.scrolled {
        height: 60px;
        box-shadow: var(--shadow-md);
    }
    
    /* 淡入動畫 */
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* 通知樣式 */
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background-color: var(--dark-color);
        color: white;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s, transform 0.3s;
    }
    
    .notification.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification.success {
        background-color: #10b981;
    }
    
    .notification.error {
        background-color: #ef4444;
    }
    
    /* 移動菜單 */
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
            z-index: 101;
        }
        
        nav ul {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: white;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            z-index: 100;
        }
        
        nav ul.show {
            right: 0;
        }
        
        nav a {
            padding: 15px;
            font-size: 1.1rem;
        }
    }
</style>
`);

document.addEventListener('DOMContentLoaded', function() {
    console.log('Config loaded:', config); // 添加這行來檢查配置是否正確加載

    // 更新個人資訊
    document.getElementById('page-title').textContent = `${config.personalInfo.name} | ${config.personalInfo.title}`;
    document.getElementById('header-name').textContent = config.personalInfo.name;
    document.getElementById('hero-subtitle').textContent = config.personalInfo.subtitle;
    document.getElementById('hero-title').innerHTML = `AI Engineer specialized in <span class="highlight">LLM development</span>`;
    document.getElementById('hero-description').textContent = config.personalInfo.description;
    document.getElementById('linkedin-link').setAttribute('data-href', `https://${config.personalInfo.linkedin}`);
    document.getElementById('footer-name').textContent = config.personalInfo.name;

    // 更新關於我部分
    const aboutDescription = document.getElementById('about-description');
    aboutDescription.innerHTML = config.about.description.map(paragraph => `<p>${paragraph}</p>`).join('');

    // 更新核心技能
    const coreSkills = document.getElementById('core-skills');
    coreSkills.innerHTML = config.about.coreSkills.map(skill => `<span>${skill}</span>`).join('');

    // 更新語言能力
    const languages = document.getElementById('languages');
    languages.innerHTML = config.about.languages.map(lang => `
        <div class="language">
            <span>${lang.name}</span>
            <div class="proficiency">
                ${Array(lang.level).fill('<div class="bar full"></div>').join('')}
                ${Array(5 - lang.level).fill('<div class="bar"></div>').join('')}
            </div>
        </div>
    `).join('');

    // 更新專案
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = config.projects.map(project => `
        <div class="project-card">
            <span data-href="${project.url}" target="_blank"></span>
            <div class="project-header">
                <span class="project-company">${project.company}</span>
                <span class="project-year">${project.year}</span>
            </div>
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-stats">
                ${project.stats.map(stat => `
                    <div class="stat">
                        <span class="stat-value">${stat.value}</span>
                        <span class="stat-label">${stat.label}</span>
                    </div>
                `).join('')}
            </div>
            <ul class="project-details">
                ${project.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <div class="project-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // 更新獎項和證照
    const awardsGrid = document.getElementById('awards-grid');
    awardsGrid.innerHTML = [
        ...config.awards.map(award => `
            <div class="award-card">
                <span data-href="${award.url}" target="_blank"></span>
                <div class="award-badge">${award.badge}</div>
                <h3>${award.title}</h3>
                <p>${award.description}</p>
                <div class="award-meta">
                    <span class="award-organizer">${award.organizer}</span>
                </div>
            </div>
        `),
        ...config.certifications.map(cert => `
            <div class="award-card cert">
                <span data-href="${cert.url}" target="_blank"></span>
                <div class="cert-icon">${cert.icon}</div>
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
                <div class="award-meta">
                    <span class="award-organizer">${cert.organizer}</span>
                </div>
            </div>
        `)
    ].join('');

    // 更新技能
    const skillsColumns = document.getElementById('skills-columns');
    skillsColumns.innerHTML = `
        <div class="skills-column">
            <h3>LLM Development</h3>
            <div class="skill-tags">
                ${config.skills.llmDevelopment.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        </div>
        <div class="skills-column">
            <h3>Software Engineering</h3>
            <div class="skill-tags">
                ${config.skills.softwareEngineering.map(skill => `<span>${skill}</span>`).join('')}
            </div>
            <h3 class="mt-20">Cloud Platforms</h3>
            <div class="skill-tags">
                ${config.skills.cloudPlatforms.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        </div>
    `;

    // 更新聯繫信息
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <a href="mailto:${config.personalInfo.email}" class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
                <h3>Email</h3>
                <p>${config.personalInfo.email}</p>
            </div>
        </a>
        <a href="https://${config.personalInfo.linkedin}" target="_blank" class="contact-item">
            <div class="contact-icon">
                <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="contact-details">
                <h3>LinkedIn</h3>
                <p>${config.personalInfo.linkedin}</p>
            </div>
        </a>
        <a href="https://${config.personalInfo.github}" target="_blank" class="contact-item">
            <div class="contact-icon">
                <i class="fab fa-github"></i>
            </div>
            <div class="contact-details">
                <h3>GitHub</h3>
                <p>${config.personalInfo.github}</p>
            </div>
        </a>
        <a href="https://${config.personalInfo.medium}" target="_blank" class="contact-item">
            <div class="contact-icon">
                <i class="fab fa-medium-m"></i>
            </div>
            <div class="contact-details">
                <h3>Medium</h3>
                <p>${config.personalInfo.medium}</p>
            </div>
        </a>
        <a href="tel:${config.personalInfo.phone}" class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-phone-alt"></i>
            </div>
            <div class="contact-details">
                <h3>Phone</h3>
                <p>${config.personalInfo.phone}</p>
            </div>
        </a>
    `;
}); 