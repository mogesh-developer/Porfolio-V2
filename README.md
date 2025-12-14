<div align="center">

# 🌟 Portfolio V2

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
</p>

<p align="center">
  <strong>A modern, responsive portfolio website showcasing my skills and projects as a Python Full Stack Developer</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-demo">Demo</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-projects-showcase">Projects</a> •
  <a href="#-contact">Contact</a>
</p>

---

</div>

## ✨ Features

- 🎨 **Modern UI/UX Design** - Clean, minimalist interface with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes for comfortable viewing
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Lightweight and optimized for speed
- 🎭 **Animated Elements** - Engaging scroll animations and hover effects
- 💼 **Project Showcase** - Display your best work with demos and GitHub links
- 📬 **Contact Form** - Integrated with Web3Forms for direct messaging
- 🔧 **Easy Customization** - Well-structured code for easy modifications

## 🚀 Demo

Visit the live site: [**View Portfolio**](https://kaavalar.dev/)

<div align="center">
  <img src="https://raw.githubusercontent.com/mogesh-developer/Porfolio-V2/main/assets/img/preview.png" alt="Portfolio Preview" width="800px" />
</div>

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Modern styling with custom properties |
| **SCSS** | Advanced CSS preprocessing |
| **JavaScript** | Interactive functionality and animations |
| **BoxIcons** | Beautiful icon library |
| **Google Fonts** | Inter & Space Grotesk typography |

## 📦 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript
- Text editor (VS Code, Sublime Text, etc.)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mogesh-developer/Porfolio-V2.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Porfolio-V2
   ```

3. **Open with Live Server**
   - If using VS Code, install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"
   
   OR
   
   Simply open `index.html` in your browser

## 🎯 Usage

### Customization Guide

#### 1. **Update Personal Information**

Edit `index.html` to customize your details:

```html
<!-- Change your name -->
<h1>Hi,<br>I'm <span class="text-highlight">Your Name</span></h1>

<!-- Update typing text -->
<span class="typing-text">Your Role</span>

<!-- Update about section -->
<p class="about__text">Your bio goes here...</p>
```

#### 2. **Modify Skills**

Add or remove skills in the skills section:

```html
<div class="skill-card" data-category="frontend">
  <img src="assets/img/your-skill.svg" alt="Skill Name" class="skill-icon">
  <h3 class="skill-name">Skill Name</h3>
  <span class="skill-badge">Expert</span>
</div>
```

#### 3. **Add Projects**

Update the projects section with your work:

```html
<div class="project-card">
  <div class="project-content">
    <div class="project-header">
      <i class='bx bx-folder folder-icon'></i>
    </div>
    <h3 class="project-title">Project Name</h3>
    <div class="project-tech-stack">
      <span class="tech-tag">Tech1</span>
      <span class="tech-tag">Tech2</span>
    </div>
    <p class="project-desc">Project description...</p>
    <div class="project-actions">
      <a href="#" class="btn btn-outline">Demo</a>
      <a href="#" class="btn btn-primary">GitHub</a>
    </div>
  </div>
</div>
```

#### 4. **Configure Contact Form**

Update the Web3Forms access key in the contact section:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY">
```

Get your free API key at [Web3Forms](https://web3forms.com/)

#### 5. **Change Colors**

Modify the CSS variables in `index.html` or your stylesheet:

```css
:root {
  --primary-color: hsl(222, 90%, 58%); /* Change primary color */
  --primary-dark: hsl(222, 90%, 45%);
  --bg-body: #FAFAFA;
  --bg-card: #FFFFFF;
}
```

## 📂 Project Structure

```
Porfolio-V2/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   ├── kaavalars.png
│   │   ├── mogesh1.png
│   │   ├── mogesh2.jpg
│   │   └── skill icons/
│   └── js/
│       └── main.js
├── index.html
└── README.md
```

## 💡 Projects Showcase

### Featured Projects

1. **Course Enrollment App** 
   - Tech: Flask, MySQL
   - Designed a system to manage course registrations and scheduling

2. **Plant Selling E-Commerce System**
   - Tech: Python, MongoDB
   - Developed a full-stack e-commerce backend for a plant shop

3. **Student & Job Portal**
   - Tech: Flask, MySQL
   - Built a job application portal with user registration and role-based access

4. **Portfolio Website**
   - Tech: HTML, CSS, JavaScript
   - Developed a personal site showcasing skills and projects

## 🎨 Screenshots

<div align="center">

### Light Mode
<img src="https://via.placeholder.com/800x450/FAFAFA/333333?text=Light+Mode+Preview" alt="Light Mode" width="700px" />

### Dark Mode
<img src="https://via.placeholder.com/800x450/0F172A/FFFFFF?text=Dark+Mode+Preview" alt="Dark Mode" width="700px" />

</div>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Mogesh** - Python Full Stack Developer

<p align="left">
  <a href="https://wa.me/9345450229">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  </a>
  <a href="https://github.com/mogesh-developer">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:your-email@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

**Portfolio:** [mogesh-developer.github.io/Porfolio-V2](https://mogesh-developer.github.io/Porfolio-V2/)

---

<div align="center">

### ⭐ Star this repo if you like it!

**Made with ❤️ by Mogesh (Kaavalar)**

<p>
  <img src="https://img.shields.io/github/stars/mogesh-developer/Porfolio-V2?style=social" alt="Stars" />
  <img src="https://img.shields.io/github/forks/mogesh-developer/Porfolio-V2?style=social" alt="Forks" />
  <img src="https://img.shields.io/github/watchers/mogesh-developer/Porfolio-V2?style=social" alt="Watchers" />
</p>

</div>
