
<template>
    <div class="w-full flex bg-gray-100 h-3/5 p-10 gap-4 max-lg:flex-col text-black mt-16">
        <div class="w-6/12 flex flex-col items-center gap-10 max-lg:w-full order-1 max-xl:order-2 max-md:order-1">
            <p ref="title" class="text-xl text-center w-2/3 mx-auto fixed-width"></p>
            <img class="w-full" src="/sliderDrone.svg" alt="">
            <div class="flex justify-center gap-4 max-md:flex-col">
                <button
                    class=" max-sm:w-28 w-48 text-lime-800 py-2 px-14 border border-lime-800 text-xl max-lg:text-base max-lg:px-8 max-lg:py-1 hover:bg-lime-800 hover:text-white font-bold transition ease duration-300">Галерея</button>
                <button
                    class=" max-sm:w-28 w-48 text-lime-800 py-2 px-14 border border-lime-800 text-xl max-lg:text-base max-lg:px-8 max-lg:py-1 hover:bg-lime-800 hover:text-white font-bold transition ease duration-300">Видео</button>
            </div>
        </div>
        <div class="w-6/12 max-lg:w-11/12 mx-auto mt-4 order-2 max-xl:order-1 max-lg:order-2 max-lg:hidden">
            <slider></slider>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            texts: [
                "Беспилотные технологии: универсальный инструмент для любой сферы",
                "Беспилотники: как технологии будущего меняют мир сегодня",
                "Беспилотники: безопасность, экология, доступность - как технологии меняют наш мир к лучшему"
            ],
            currentTextIndex: 0,
            currentText: "",
            isDeleting: false,
            typingSpeed: 150,
            deletingSpeed: 50,
            pauseTime: 1500
        };
    },
    mounted() {
        this.typeText();
    },
    methods: {
        typeText() {
            const currentText = this.texts[this.currentTextIndex];
            const currentTextLength = this.currentText.length;

            if (this.isDeleting) {
                this.currentText = currentText.substring(0, currentTextLength - 1);
            } else {
                this.currentText = currentText.substring(0, currentTextLength + 1);
            }

            const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

            if (!this.isDeleting && this.currentText === currentText) {
                setTimeout(() => {
                    this.isDeleting = true;
                }, this.pauseTime);
            } else if (this.isDeleting && this.currentText === "") {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            }

            this.$refs.title.innerText = this.currentText;

            setTimeout(this.typeText, speed);
        }
    }
};
</script>

<style scoped>
.fixed-width {
     
    height: 110px;/* Задайте фиксированную ширину, которая подходит для вашего контента */
    white-space: wrap; /* Предотвращает перенос строк */
    overflow: hidden; /* Скрывает текст, который не помещается в контейнер */
}

/* Добавьте здесь стили для адаптивности, если необходимо */
@media (max-width: 768px) {
    .fixed-width {
        width: 100%; /* На маленьких экранах ширина будет 100% */
    }
}
</style>