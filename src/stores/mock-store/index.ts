import { defineStore } from 'pinia'
import type { MockTextData } from '@/shared/types/textData'

export const useMockStore = defineStore('mock-store', () => {
  const mockData: MockTextData = {
    id: 1,
    title: 'Современные проблемы общественности',
    content: [
      {
        id: 2,
        title: 'Новые проблемы экологии',
        content: [
          {
            id: 3,
            title: 'Загрязнение воздуха',
            content: `Загрязнение воздуха — это процесс, при котором в атмосферу попадают вредные вещества, такие как выбросы углекислого газа, оксиды азота, серы, а также частицы пыли и химические вещества. 
                  Основные источники загрязнения включают промышленность, транспорт, сжигание угля и отходов. 
                  Эти загрязнители негативно влияют на здоровье человека, вызывая заболевания дыхательных путей и сердечно-сосудистой системы, а также способствуют изменению климата. 
                  Снижение загрязнения воздуха требует перехода к более чистым источникам энергии, улучшения транспорта и эффективного управления отходами.`,
          },
          {
            id: 4,
            title: 'Глобальное потепление',
            content: `Глобальное потепление связано с увеличением концентрации парниковых газов в атмосфере, что ведет к повышению средней температуры на планете. 
                  Это явление вызывает изменение климата, таяние ледников и повышение уровня моря, что может привести к разрушению экосистем и угрозам для жизни людей.`,
          },
          {
            id: 5,
            title: 'Загрязнение воды',
            content: `Загрязнение водоемов происходит в результате сброса промышленных отходов, нефти, химических веществ и сточных вод. 
                  Это негативно сказывается на экосистемах рек, озер и океанов, а также на здоровье людей, которые употребляют загрязненную воду или потребляют загрязненные продукты питания.`,
          },
          {
            id: 6,
            title: 'Пластиковое загрязение',
            content: `Проблема пластиковых отходов стала одной из самых острых в последние десятилетия. 
                  Пластик, разлагаясь в окружающей среде, наносит ущерб флоре и фауне, а также загрязняет водоемы и океаны. 
                  Огромное количество пластика попадает в землю, где он может оставаться в течение сотен лет.`,
          },
        ],
      },
      {
        id: 7,
        title: 'Дефицит автозапчастей',
        content: [
          {
            id: 8,
            title: 'Дефицит автозапчастей на старые автомобили: вызовы для владельцев',
            content: `Старые автомобили, несмотря на свою надежность и популярность среди автовладельцев, все чаще сталкиваются с проблемой дефицита запчастей. 
                     Основной причиной этого является постепенное снятие таких автомобилей с производства. Когда модель устаревает, производители постепенно прекращают выпуск оригинальных деталей, чтобы сосредоточиться на новых сериях.
                     Дефицит усугубляется из-за ограниченного количества складских запасов. Владельцы старых автомобилей часто вынуждены искать запчасти на вторичном рынке, где они могут быть изношенными или даже поддельными. 
                     Это повышает риски для безопасности и может приводить к увеличению частоты ремонта.`,
          },
          {
            id: 9,
            title: 'Дефицит деталей на новые автомобили',
            content: [
              {
                id: 10,
                title: 'Влияние на производство',
                content: `Дефицит автозапчастей для новых автомобилей стал одной из ключевых проблем автомобильной отрасли в последние годы. Основной причиной является нарушение глобальных цепочек поставок. Ситуацию усугубляют такие факторы, как нехватка полупроводников, задержки в логистике и нестабильность производства компонентов в связи с пандемией.
                       Автопроизводители вынуждены замедлять или приостанавливать производство новых моделей из-за отсутствия критически важных деталей. Это приводит к увеличению сроков ожидания для покупателей, росту цен на новые автомобили и снижению объемов поставок.
                       Для решения проблемы компании вынуждены инвестировать в локализацию производства деталей и развитие новых партнерств. Однако это требует времени, что делает ситуацию с дефицитом запчастей актуальной на долгосрочную перспективу.`,
              },
              {
                id: 11,
                title: 'Проблемы с ремонтом новых автомобилей из-за нехватки запчастей',
                content: `Дефицит запчастей для новых автомобилей также создает серьезные трудности для владельцев при ремонте. Сложности возникают, когда детали для недавно выпущенных моделей отсутствуют на складе или их производство не успевает за спросом.
                       Часто страдают владельцы автомобилей премиум-класса и электроавтомобилей, где используются уникальные технологии и компоненты. В таких случаях ожидание деталей может занимать недели или даже месяцы.
                       Автосервисы, не имея возможности получить оригинальные комплектующие, вынуждены искать альтернативные решения. Это может привести к увеличению стоимости ремонта, снижению качества обслуживания и затруднениям в гарантийном обслуживании.
                       Производителям необходимо оперативно адаптировать свои логистические процессы и поддерживать доступность деталей, чтобы сохранить доверие клиентов и предотвратить негативное влияние на репутацию бренда.`,
              },
            ],
          },
        ],
      },
    ],
  }
  return { mockData }
})
