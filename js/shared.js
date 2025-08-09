// Shared header and footer components
function createHeader() {
    return `
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <a href="/">KOBE PC</a>
            </div>
            <ul class="nav-menu">
                <li><a href="/">Home</a></li>
                <li class="dropdown">
                    <a href="/pages/services.html">Services ▼</a>
                    <ul class="dropdown-menu">
                        <li><a href="/pages/services/basic-repair.html">基本修理</a></li>
                        <li><a href="/pages/services/hardware-repair.html">ハードウェア修理</a></li>
                        <li><a href="/pages/services/data-recovery.html">データ復旧</a></li>
                    </ul>
                </li>
                <li><a href="/pages/about.html">About</a></li>
                <li><a href="/pages/pricing.html">Pricing</a></li>
                <li><a href="/pages/portfolio.html">Portfolio</a></li>
                <li><a href="/pages/faq.html">FAQ</a></li>
                <li><a href="/pages/blog.html">Blog</a></li>
                <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    `;
}

function createFooter() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>KOBE PC Services</h4>
                    <p>神戸で最も信頼されるPC・スマホ修理専門店。30分修理、地域最安値で高品質なサービスを提供しています。</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Instagram">📷</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>サービス</h4>
                    <ul>
                        <li><a href="/pages/services/basic-repair.html">基本修理</a></li>
                        <li><a href="/pages/services/hardware-repair.html">ハードウェア修理</a></li>
                        <li><a href="/pages/services/data-recovery.html">データ復旧</a></li>
                        <li><a href="/pages/portfolio.html">修理実績</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>会社情報</h4>
                    <ul>
                        <li><a href="/pages/about.html">会社概要</a></li>
                        <li><a href="/pages/faq.html">よくある質問</a></li>
                        <li><a href="/pages/blog.html">ブログ</a></li>
                        <li><a href="/pages/contact.html">お問い合わせ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>お問い合わせ</h4>
                    <div class="contact-info">
                        <p>📞 <a href="tel:078-332-6626">078-332-6626</a></p>
                        <p>📧 <a href="mailto:info@kobepc.com">info@kobepc.com</a></p>
                        <p>📍 神戸市中央区</p>
                        <p>🕒 営業時間: 9:00-18:00 (月-土)</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Kobe PC Services. All rights reserved. | <a href="/pages/privacy.html">プライバシーポリシー</a> | <a href="/pages/terms.html">利用規約</a></p>
            </div>
        </div>
    </footer>
    `;
}

// Initialize shared components
document.addEventListener('DOMContentLoaded', () => {
    // Insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createHeader();
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }
    
    // Initialize mobile menu after header is inserted
    setTimeout(initializeMobileMenu, 100);
});

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    let menuOpen = false;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                navMenu.classList.add('mobile-active');
                hamburger.classList.add('active');
            } else {
                navMenu.classList.remove('mobile-active');
                hamburger.classList.remove('active');
            }
        });
    }
}