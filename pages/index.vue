<script setup>
import { _opacity } from '#tailwind-config/theme';
import { ref, reactive, computed, onMounted } from 'vue'
const isLoaded = ref(false)
const isVisible = ref(false)


const nextClick = ref(false)

function nextClickArrow() {
  nextClick.value = !nextClick.value;
  setTimeout(() => {
    isVisible.value = true;
  }, 50)
}

const applicationTwo = [
  {
    img: '/10.jpg',
    title: 'Мониторинг',
    text: 'Исследование, наблюдение, контроль удаленных и протяяженных обьектов, экологический мониторинг',
    description: 'Дроны могут быть использованы для мониторинга состояния различных объектов, таких как инфраструктура, сельскохозяйственные угодья, а также для выполнения экологического мониторинга.'
  },
  {
    img: '/11.jpg',
    title: 'Геодезия',
    text: 'Маркшейдерские изыскания, точное измерение и планирование',
    description: 'Дроны могут быть использованы для выполнения маркшейдерских изысканий, точного измерения и планирования, что позволяет более accurately и efficiently управлять горнодобывающими и строительными проектами.'
  },
  {
    img: '/12.jpg',
    title: 'Cканирование',
    text: 'Геодезия, маркшейдерия, горное дело, нефтегазодобыча, строительство. точное земледелие, природоохрана',
    description: 'Дроны могут быть использованы для выполнения лазерного сканирования, что позволяет получать точные трехмерные модели объектов и terreno.'
  },
  {
    img: '/12.jpg',
    title: 'Cканирование',
    text: 'Геодезия, маркшейдерия, горное дело, нефтегазодобыча, строительство. точное земледелие, природоохрана',
    description: 'Дроны могут быть использованы для выполнения лазерного сканирования, что позволяет получать точные трехмерные модели объектов и terreno.'
  }
]

const applicationOne = [
  {
    img: '/13.jpg',
    title: 'Нефтегазовый сектор',
    text: 'Геологоразведка, сейсморазведка, ортофотопланы, 3D-модели, контроль реализацции проектов, мониторинг работы обьектов',
    description: 'Дроны могут быть использованы для мониторинга состояния скважин, surveilance месторождений, а также для выполнения различных задач в области геологии и геофизики.'
  },
  {
    img: '/14.jpg',
    title: 'Аэрофотосьемка',
    text: 'Геодезия, картография, 3D-модели местности',
    description: 'Дроны могут быть использованы для выполнения аэрофотосъемки, которая используется для создания ортофотопланов, 3D-моделей и других географических данных.'
  },
  {
    img: '/15.jpg',
    title: 'Сельское хозяйство',
    text: 'Мониторинг БПЛА, Инвентаризация полей и техники, расчет индексов растительности, посев, внесение биологической защиты, опрыскивание',
    description: 'Дроны могут быть использованы для мониторинга состояния сельскохозяйственных угодий, сбора данных о урожае, а также для выполнения других задач в области сельского хозяйства.'
  },
  {
    img: '/12.jpg',
    title: 'Cканирование',
    text: 'Геодезия, маркшейдерия, горное дело, нефтегазодобыча, строительство. точное земледелие, природоохрана',
    description: 'Дроны могут быть использованы для выполнения лазерного сканирования, что позволяет получать точные трехмерные модели объектов и terreno.'
  }
]

const items = [
  {
    img: '/ai.svg',
    title: 'Искусственный интеллект:',
    text: 'Мы разрабатываем собственные технологии, обеспечивающие уникальные возможности нашим дронам. От интеллектуальных систем навигации до революционных методов аэрофотосъемки – наши дроны опережают рынок.'
  },
  {
    img: '/idea.svg',
    title: 'Уникальность:',
    text: 'Мы понимаем, что каждый клиент уникален. Наши специалисты готовы адаптировать дроны под любые задачи: от мониторинга сельскохозяйственных угодий до съемки спортивных мероприятий. Индивидуальный подход – наше кредо.'
  },
  {
    img: '/icology.svg',
    title: 'Экологичность:',
    text: 'Мы заботимся об окружающей среде. Наши дроны работают на альтернативных источниках энергии, а материалы, используемые в производстве, являются экологически безопасными и подлежат вторичной переработке.'
  },
  {
    img: '/price.svg',
    title: 'Доступные цены:',
    text: 'Мы стремимся сделать технологии дронов доступными для широкого круга пользователей. Наши цены конкурентоспособны, а качество продукции не оставляет желать лучшего.'
  },

]
</script>
<template>
  <div class="conteiner bg-gray-100">
    <div class="w-11/12 mx-auto p-10">
      <h1 class="text-lime-800 text-3xl mb-10 max-sm:text-xl">Наши преимущества</h1>
      <main>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 ">
          <div v-for="item in items" :key="item"
            class="card text-black bg-gray-100  p-4 flex-col rounded-xl transition-all duration-500 hover:bg-white hover:shadow-xl">
            <ul class="flex items-center mb-4 gap-10">
              <li><img :src="item.img" alt=""></li>
              <li>
                <p class="text-xl"><b>{{ item.title }}</b></p>
              </li>
            </ul>
            <ul>
              <p class="text-center text-lg max-sm:text-sm">{{ item.text }}</p>
            </ul>
          </div>
          </div>



          <h1 class="text-lime-800 text-3xl py-10 max-sm:text-xl">Отрасли применения</h1>
          <div class="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div v-for="item in applicationOne" :key="item" class="hover-text-one w-1/3">
            <figure class="effect-text-two">
              <img :src="item.img " alt=""/>
              <figcaption>
                <h3 class="">{{item.title }}</h3>
                <p>{{ item.text }}</p>
              </figcaption>
            </figure>
          </div>
         </div>
        <img v-if="!nextClick" class="mx-auto p-10 hover:scale-125 transition-all duration-500" src="/nextArrow.svg" alt="" @click="nextClickArrow">
          
        <div v-else class="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 opacity-0 transition-opacity" :class="{ 'opacity-100': isVisible }">
          <div v-for="item in applicationTwo" :key="item" class="hover-text-one w-1/3">
            <figure class="effect-text-two">
              <img :src="item.img " alt=""/>
              <figcaption>
                <h3 class="max-md: text-sm">{{item.title }}</h3>
                <p>{{ item.text }}</p>
              </figcaption>
            </figure>
          </div>
         </div>
         <CallApp></CallApp>
      </main>
    </div>
  </div>
</template>
<style scoped>
/* Общие стили */
@media (max-width: 450px) {
  figure.effect-text-two:hover h3 {
    display: none;
  }
}
*,
*:after,
*:before {
  
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}

.clearfix:after {
  clear: both;
}

.hover-text-one {
  overflow: hidden;
  margin: 0;
  width: 100%;
  list-style: none;
  text-align: center;
}

.hover-text-one figure {
  position: relative;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  background: #527c82;
  text-align: center;
  cursor: pointer;
}

.hover-text-one figure img {
  position: relative;
  display: block;
  min-height: 100%;
  opacity: 0.8;
}

.hover-text-one figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hover-text-one figure figcaption::before,
.hover-text-one figure figcaption::after {
  pointer-events: none;
}

.hover-text-one figure figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hover-text-one figure h3 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.hover-text-one figure h3 span {
  font-weight: 800;
}

.hover-text-one figure h3,
.hover-text-one figure p {
  margin: 0;
}

.hover-text-one figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Эффект при наведении */
figure.effect-text-two figcaption::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(top, rgba(72, 76, 97, 0) 0%, rgba(72, 76, 97, 0.8) 75%);
  background: linear-gradient(to bottom, rgba(72, 76, 97, 0) 0%, rgba(72, 76, 97, 0.8) 75%);
  content: '';
  opacity: 0;
  -webkit-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}

figure.effect-text-two h3 {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #f66d52 !important;
  
  font-size: 1.5em;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

figure.effect-text-two figcaption::before,
figure.effect-text-two p {
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-text-two p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
}

figure.effect-text-two:hover h3 {
  color: #fff;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
}

figure.effect-text-two:hover figcaption::before,
figure.effect-text-two:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* ____________________ */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.transition-opacity {
  transition: opacity 1s ease-in-out;
}
</style>