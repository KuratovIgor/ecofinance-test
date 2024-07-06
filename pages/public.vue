<template>
    <div class="public-page">
        <h1>{{ personalInfo.name }}, {{ personalInfo.age }}</h1>

        <div class="public-page__info">{{ personalInfo.title }}</div>

        <div class="public-page__contacts">
            <div class="public-page__contacts-title">Контакты:</div>
            <div>
                Telegram:
                <a :href="personalInfo.telegram" target="_blank">{{ personalInfo.telegram }}</a>
            </div>

            <div>
                Email:
                <a :href="personalInfo.email" target="_blank">{{ personalInfo.email }}</a>
            </div>
        </div>

        <div class="public-page__info">
            Стэк:
            <span v-for="item of personalInfo.stack">{{ item }},&nbsp</span>
        </div>

        <div class="public-page__info">Опыт работы:</div>
        <experience-card
            v-for="(experienceItem, index) in personalInfo.experience"
            :key="index"
            :experience="experienceItem"
        />
    </div>
</template>

<script lang="ts" setup>
import type { PersonalInfo } from '@/types/user.type'

const personalInfo: PersonalInfo = {
    title: 'Frontend Разработчик',
    name: 'Куратов Игорь Александрович',
    age: 21,
    telegram: 'https://t.me/igor_kuratovv',
    email: 'kuratovigor084@gmail.com',
    experience: [
        {
            title: 'Совкомбанк Технологии',
            dates: {
                from: 'Август 2023',
                to: 'По настоящее время',
            },
            jobTitle: `Middle Frontend Разработчик`,
            description: `Разработка и сопровождение инфраструктуры карты Халва (сайт, личный кабинет, админ-панель, лэндинги) на Vue, Nuxt и PHP. Работаю в команде из 16 frontend разработчиков, большую часть времени занимаюсь редизайном сайта и личного кабинета. Документация в Jira Confluence, доска с задачами в YouTrack, рабочие процессы через Pyrus.
                            <br /> <br />
                            Обязанности помимо разработки: <br />
                            &nbsp- Покрытие кодовой базы Unit-тестами при помощи Vitest<br />
                            &nbsp- Покрытие сайта и лендингов метриками для аналитики (Яндекс, Google, DataLayer)<br />
                            &nbsp- Сборка веток в Gitlab из релизных задач для бизнеса<br />
                            &nbsp- Активное участие в процессах: код-ревью, планирование, ретроспективы, взаимодействие с командами аналитики и тестирования<br /><br />

                            Из личных существенных достижений:<br />
                            &nbsp- Реализовал редизайн формы заказа карты, который в первый месяц привел к росту конверсии оформления карты на 30%<br />
                            &nbsp- Внедрил на новый сайт сбор отчетов о показателях<br />
                            Core Web Vitals (INP) для оценки отзывчивости и скорости работы сайта и его дальнейшей оптимизации<br /><br />
                            
                            Стек:<br />
                            Vue 3, Nuxt 3, TypeScript, JavaScript, PHP, Vitest, Pinia, Docker, Git, Gitlab, Gitlab CI`
        },
        {
            title: 'Диджитал Клаудс',
            dates: {
                from: 'Июль 2021',
                to: 'август 2023',
            },
            jobTitle: `Frontend Разработчик`,
            description: `Разрабатывал проекты различной сложности на Vue и Nuxt. В их числе как обычные лэндинги и личные кабинеты, так и крупные e-commerce платформы (Cozy Home, Платферрум). Команды были из 3-4 Vue-разработчиков, менеджера и backend-разработчиков. Ведение документации и доска разработки в Jira. Участвовал в код-ревью и релизах, был опыт управления командой
                            <br /><br />
                            Из личных достижений:<br />
                            &nbsp- Успешно в одиночку довел от начала разработки до релиза 2 проекта<br />
                            &nbsp- Инициировал внедрение архитектуры FSD на проекты, руководил командой внедрения<br />
                            &nbsp- Ускорил процесс разработки, создав удобный шаблон для разработки проектов<br />
                            &nbsp- Настроил CI/CD пайплайн для автоматической доставки проекта на несколько стендов<br />
                            &nbsp- Написал микроразметку (SEO) для международного сайта компании<br /><br />

                            Стек:<br />
                            Vue 3, Nuxt 3, TypeScript, JavaScript, Node.js, Pinia, Docker, NGINX, Git, Gitlab, Gitlab CI`
        },
    ],
    stack: ['JavaScript', 'TypeScript', 'Vue 3', 'Nuxt 3', 'Pinia', 'Docker', 'Git', 'PHP', 'Vitest'],
}
</script>

<style lang="scss" scoped>
.public-page {
    &__info {
        margin-bottom: 20px;
        font-size: 20px;
    }

    &__contacts {
        margin-bottom: 20px;

        &-title {
            font-size: 20px;
        }
    }

    &__experience {
        margin-bottom: 20px;
        max-width: 800px;
        font-size: 14px;

        &-title {
            margin-bottom: 10px;
            font-size: 20px;
        }
    }
}
</style>
