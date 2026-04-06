import os
import re

replacements = {
    # Layout & Meta
    'Taras Andrusyshyn — Технології та маркетинг': 'Taras Andrusyshyn — Tech & Marketing',
    'Блог про ШІ, технології та маркетинг. Практичний контент без зайвої теорії: інструменти, стратегії, кейси.': 'Blog about AI, tech, and marketing. Practical content without fluff: tools, strategies, and case studies.',
    'Технології': 'Tech',
    'маркетинг': 'marketing',
    'Блог про технології, маркетинг та побудову ефективних digital-систем.': 'Blog about tech, marketing and building efficient digital systems.',
    'lang="uk"': 'lang="en"',
    'locale: \'uk_UA\'': 'locale: \'en_US\'',
    
    # Header / Navigation
    'Про мене': 'About Me',
    'Послуги': 'Services',
    'Блог': 'Blog',
    'Головна': 'Home',
    'На головну': 'Home',
    
    # Footer
    'Створено з використанням AI': 'Created with AI',
    'Політика конфіденційності': 'Privacy Policy',
    'Умови використання': 'Terms of Service',
    
    # Homepage Hero
    'Привіт! Я Тарас — маркетолог та AI ентузіаст.': 'Hi! I am Taras — a marketer and AI enthusiast.',
    'Допомагаю бізнесам будувати ефективні marketing-системи та впроваджувати AI для автоматизації рутини.': 'I help businesses build efficient marketing systems and integrate AI to automate routine tasks.',
    'Мої послуги': 'My Services',
    'Читати блог': 'Read Blog',
    
    # Homepage sections
    'Останні статті': 'Latest Posts',
    'Всі статті →': 'All Posts →',
    
    # About Page
    'Привіт, я Тарас Андрусишин 👋': 'Hi, I am Taras Andrusyshyn 👋',
    'Вивчаю ШІ, пишу про технології та маркетинг. Мій фокус — практичний контент без зайвої теорії: інструменти, стратегії, кейси, що реально працюють.': 'I study AI, write about tech and marketing. My focus is practical content: working tools, strategies, and case studies.',
    'Чим займаюсь': 'What I Do',
    'Я маркетолог та АІ розробник.': 'I am a marketer and AI developer.',
    'Моя головна місія — показати, що одна людина сьогодні може замінити цілу команду, якщо правильно впроваджує AI. Я переконаний, що фаундерам потрібно впроваджувати штучний інтелект у свій бізнес якомога швидше, поки це ще дає значну конкурентну перевагу.': 'My main mission is to show that one person today can replace a whole team if they correctly apply AI. I am convinced founders need to adopt AI into their businesses as fast as possible while it still gives a competitive edge.',
    'Основні теми:': 'Main topics:',
    'платний та органічний трафік': 'paid and organic traffic',
    'аналітика': 'analytics',
    'автоматизація': 'automation',
    'та побудова digital-систем. Пишу тільки про те, у чому маю практичний досвід.': 'and building digital systems. I only write about things I have practical experience in.',
    'З нуля будував веб-студію та IT школу як співзасновник та CEO.': 'Built a web studio and an IT school from scratch as a co-founder and CEO.',
    'Коротко про шлях': 'My Journey',
    'Співпраця': 'Collaboration',
    'Відкритий до партнерств, гостьових постів, інтерв\'ю та рекламних інтеграцій (тільки з продуктами, якими сам користуюсь).': 'Open to partnerships, guest posts, interviews, and ad integrations (only with products I personally use).',
    'Для зв\'язку зі мною пишіть в ': 'To contact me, write to my ',
    'особистий Telegram (@tsand07)': 'personal Telegram (@tsand07)',
    'Експертиза': 'Expertise',
    'керованих рекламних бюджетів': 'managed ad budgets',
    'успішно реалізованих проєктів': 'successful projects',
    'років у digital': 'years in digital',
    'Запуск особистого медіа-хабу': 'Launched personal media hub',
    'Централізував весь контент на власному сайті.': 'Centralized all content on my own website.',
    'Співзасновник та CEO ITBS': 'Co-founder and CEO of ITBS',
    'Школа для IT підприємців.': 'School for IT entrepreneurs.',
    'Співзасновник веб-студії та маркетингового агентства': 'Co-founder of web studio and marketing agency',
    'Платний трафік': 'Paid Traffic',
    'Почав займатись платним трафіком: Google Adwords, Yandex Direct, Facebook, Instagram.': 'Started working with paid traffic: Google Ads, Yandex Direct, Facebook, Instagram.',
    
    # Newsletter
    'Сподобалась стаття?': 'Liked the article?',
    'Підпишись на newsletter — раз на тиждень найкраще з технологій та маркетингу.': 'Subscribe to the newsletter — weekly best in tech and marketing.',
    'Отримуйте раз на тиждень порцію корисного контенту: нові AI інструменти, розбори маркетингових стратегій та мої особисті спостереження.': 'Get a weekly dose of useful content: new AI tools, marketing strategy breakdowns, and personal insights.',
    'Ваш email...': 'Your email...',
    'Підписатись': 'Subscribe',
    'Підписуйтесь': 'Subscribe',
    'Без спаму. Можна відписатись у будь-який момент.': 'No spam. Unsubscribe at any time.',
    'Ви успішно підписались!': 'Successfully subscribed!',
    'Щотижневий дайджест про технології та маркетинг.': 'Weekly digest about tech and marketing.',
    
    # Blog Page
    'Всі статті': 'All Posts',
    'Всі': 'All',
    'Вивчаю ШІ, пишу про технології та маркетинг. Практичний контент без зайвої теорії.': 'I study AI, write about tech and marketing. Practical content without fluff.',
    'матеріалів': 'posts',
    'Статей у цій категорії поки немає.': 'No articles in this category yet.',
    'хв читання': 'min read',
    'Поділитись:': 'Share:',
    'Про мене →': 'About Me →',
    'Схожі матеріали': 'Related Materials',
    'Навігація': 'Navigation',
    'Без назви': 'Untitled',
    
    # Privacy / Terms (excerpts)
    'Останнє оновлення:': 'Last updated:',
    'Березень 2026': 'March 2026',
    'Загальні положення': 'General Provisions',
    'Ця Політика конфіденційності встановлює порядок отримання...': 'This Privacy Policy establishes the procedure...',
    'Якщо у вас виникли питання щодо цієї Політики конфіденційності, ви можете зв\'язатися з нами за адресою:': 'If you have any questions regarding this Privacy Policy, you can contact us at:',
    
    # Components imports
    "'@/components/": "'@/components/en/",
    
    # Layout Fix
    "'./globals.css'": "'../globals.css'", 
    
    # URL fixes 
    'href="/blog"': 'href="/en/blog"',
    'href="/about"': 'href="/en/about"',
    'href="/services"': 'href="/en/services"',
    'href="/privacy"': 'href="/en/privacy"',
    'href="/terms"': 'href="/en/terms"',
    'href="/"': 'href="/en/"',
}

def translate_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if not file.endswith('.js') and not file.endswith('.css'):
                continue
                
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            original_content = content
            for ua, en in replacements.items():
                content = content.replace(ua, en)
                
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Translated {filepath}")

if __name__ == "__main__":
    translate_directory('app/en')
    translate_directory('components/en')

    # Also we need to fix globals.css import in app/(uk)/layout.js
    uk_layout = 'app/(uk)/layout.js'
    if os.path.exists(uk_layout):
        with open(uk_layout, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace("'./globals.css'", "'../globals.css'")
        with open(uk_layout, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed uk layout")
