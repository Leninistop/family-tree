// ============================================================
// 1. ЛЮДИ (узлы)
// local: "yes" — если жил/работал в Калининграде или Мамоново
// ============================================================
const people = [
    // ПОКОЛЕНИЕ 1
    { data: { id: 'ilya', label: 'Илья\nБулыгин', image: 'photos/ilya.jpg', local: 'yes', info: 'Булыгин Илья Анатольевич. Родился 5 июля 2011 г. в Калининграде, РФ.' } },
    { data: { id: 'varvara', label: 'Варвара\nБулыгина', image: 'photos/varvara.jpg', local: 'yes', info: 'Сестра по линии отца. Родилась 26 мая 2021 г. Проживает в Мамоново.' } },
    { data: { id: 'daniil', label: 'Даниил\nБулыгин', image: 'photos/daniil.jpg', local: 'yes', info: 'Брат по линии отца. Родился 21 июня 2026 г. Проживает в Мамоново.' } },

    // ПОКОЛЕНИЕ 2
    { data: { id: 'yulia', label: 'Юлия\nБулыгина', image: 'photos/yulia.jpg', local: 'yes', info: 'Булыгина Юлия Сергеевна (девичья — Михновец). Родилась 9 мая 1988 г. в Калининграде. Высшее экономическое образование (КГТУ). Работает специалистом ОПЛ в Энерготрансбанке.' } },
    { data: { id: 'anatoly', label: 'Анатолий\nБулыгин', image: 'photos/anatoly.jpg', local: 'yes', info: 'Булыгин Анатолий Александрович. Родился 17 ноября 1987 г. в посёлке Мелиораторов. В 2000 г. переехал в Мамоново. По профессии — сварщик.' } },
    { data: { id: 'denis', label: 'Денис\nБулыгин', image: 'photos/denis.jpg', local: 'yes', info: 'Дядя, брат отца. Родился 8 января 1982 г. В 2000 г. переехал в Мамоново. Умер 28.05.2010.' } },
    { data: { id: 'evgeny_m', label: 'Евгений\nМихновец', image: 'photos/evgeny_m.jpg', local: 'yes', info: 'Младший брат деда по маминой линии. Родился 21 мая 1977 г. в Калининграде. Работал на заводе «Янтарь». С 2014 г. живёт в Евпатории.' } },
    { data: { id: 'dmitry_b', label: 'Дмитрий\nБелов', image: 'photos/dmitry_b.jpg', local: 'yes', info: 'Младший брат бабушки по маминой линии. Родился 11 марта 1973 г. в Калининграде. Работал на производстве мяса. Умер 9.05.2011.' } },

    // ПОКОЛЕНИЕ 3
    { data: { id: 'sergey_m', label: 'Сергей\nМихновец', image: 'photos/sergey_m.jpg', local: 'yes', info: 'Михновец Сергей Михайлович. Родился 5 июля 1965 г. в Калининграде. Работал на заводе «Янтарь» сборщиком. Умер 15.05.2003.' } },
    { data: { id: 'svetlana', label: 'Светлана\nМихновец', image: 'photos/svetlana.jpg', local: 'yes', info: 'Михновец Светлана Николаевна (девичья — Белова). Родилась 29 июня 1966 г. в Калинине. Работала на заводе «Янтарь», затем диспетчером на «ПАП».' } },
    { data: { id: 'alexander_b', label: 'Александр\nБулыгин', image: 'photos/alexander_b.jpg', local: 'yes', info: 'Булыгин Александр Александрович. Родился 25 мая 1959 г. Детство провёл в Мамоново. Работал водителем. Умер 27.02.2024.' } },
    { data: { id: 'lyubov', label: 'Любовь\nБулыгина', image: 'photos/lyubov.jpg', local: 'yes', info: 'Булыгина Любовь Анатольевна (в девичестве Туранина). Родилась 3 октября 1960 г. Работала в Мамоновском зверосовхозе. Умерла 3.10.2020.' } },
    { data: { id: 'vladimir_b', label: 'Владимир\nБулыгин', image: 'photos/vladimir_b.jpg', local: 'yes', info: 'Старший брат деда по папиной линии. Жил в Мамоново. Был ликвидатором последствий аварии на ЧАЭС. Умер 6.01.2000.' } },
    { data: { id: 'viktor_t', label: 'Виктор\nТуранин', image: 'photos/viktor_t.jpg', local: 'yes', info: 'Старший брат бабушки. Родился 13 сентября 1947 г. Умер 10.06.2000 в Мамоново.' } },

    // ПОКОЛЕНИЕ 4 (Прадеды и их братья/сестры)
    { data: { id: 'antonina', label: 'Антонина\nБелова', image: 'photos/antonina.jpg', local: 'yes', info: 'Белова Антонина Петровна. Приехала в Калининград. Работала плановиком на заводе ЖБИ-1. Умерла 20.12.2016.' } },
    { data: { id: 'nikolay_b', label: 'Николай\nБелов', image: 'photos/nikolay_b.jpg', local: 'yes', info: 'Белов Николай Иванович. Переехал в Калининградскую область. Работал водителем на заводе ЖБИ-1. Ходил в моря. Живёт в Прибрежном.' } },
    { data: { id: 'mikhail_m', label: 'Михаил\nМихновец', image: 'photos/mikhail_m.jpg', local: 'yes', info: 'Михновец Михаил Николаевич. Переехал в Калининград. Работал на заводе «Янтарь» крановщиком. Умер 17.08.1999.' } },
    { data: { id: 'klavdia_m', label: 'Клавдия\nМихновец', image: 'photos/klavdia_m.jpg', local: 'yes', info: 'Михновец Клавдия Ивановна. С 1958 г. жила в Калининграде. Работала на заводе «Янтарь» маляром. Награждена медалями.' } },
    { data: { id: 'anatoly_t', label: 'Анатолий\nТуранин', image: 'photos/anatoly_t.jpg', local: 'no', info: 'Прадед по папиной линии. Участник ВОВ. Умер 23.04.1986, похоронен в Тюмени.' } },
    { data: { id: 'anfisa', label: 'Анфиса\nТуранина', image: 'photos/anfisa.jpg', local: 'no', info: 'Прабабушка по папиной линии. Труженица тыла. Умерла 3.06.2018, похоронена в Тюмени.' } },
    { data: { id: 'klavdia_b', label: 'Клавдия\nБулыгина', image: 'photos/klavdia_b.jpg', local: 'yes', info: 'Булыгина Клавдия Ивановна. Жила в Мамоново, работала в зверосовхозе. Умерла 13.08.2003.' } },
    { data: { id: 'alexander_m', label: 'Александр\nБулыгин (ст.)', image: 'photos/alexander_m.jpg', local: 'yes', info: 'Булыгин Александр Макарович. Переехал в Мамоново в 1960-х. Умер 28.08.1979.' } },
    { data: { id: 'nina_m', label: 'Нина\nМочалкина', image: 'photos/nina_m.jpg', local: 'no', info: 'Сестра Антонины Беловой.' } },
    { data: { id: 'zoya', label: 'Зоя', image: 'photos/zoya.jpg', local: 'no', info: 'Сестра Антонины Беловой.' } },
    { data: { id: 'valentina_p', label: 'Валентина\nПодопригора', image: 'photos/valentina_p.jpg', local: 'no', info: 'Сестра Антонины Беловой.' } },
    { data: { id: 'ekaterina_k', label: 'Екатерина\nКузнецова', image: 'photos/ekaterina_k.jpg', local: 'no', info: 'Сестра Антонины Беловой.' } },
    { data: { id: 'boris_b', label: 'Борис\nБулыгин', image: 'photos/boris_b.jpg', local: 'yes', info: 'Брат Александра Макаровича. Участник ВОВ. Работал на рыбоконсервном комбинате в Мамоново. Умер 31.12.1980.' } },
    { data: { id: 'lidia_b', label: 'Лидия\nБулыгина', image: 'photos/lidia_b.jpg', local: 'no', info: 'Сестра Александра и Бориса Булыгиных.' } },
    { data: { id: 'mikhail_b', label: 'Михаил\nБелов', image: 'photos/mikhail_b.jpg', local: 'no', info: 'Брат Николая Белова (1923 - 2019).' } },

    // ПОКОЛЕНИЕ 5 (Прапрадеды)
    { data: { id: 'maria_f', label: 'Мария\nФигурова', image: 'photos/maria_f.jpg', local: 'no', info: 'Фигурова Мария Даниловна. Карелка. Умерла 18.01.1989.' } },
    { data: { id: 'petr_f', label: 'Пётр\nФигуров', image: 'photos/petr_f.jpg', local: 'no', info: 'Фигуров Пётр Тимофеевич. Участник Советско-Финской и ВОВ.' } },
    { data: { id: 'olga', label: 'Ольга\nБелова', image: 'photos/olga.jpg', local: 'yes', info: 'Белова Ольга Андреевна. Переехала в Калининградскую область в 1949 г. Умерла 28.08.1985.' } },
    { data: { id: 'ivan_b', label: 'Иван\nБелов', image: 'photos/ivan_b.jpg', local: 'yes', info: 'Белов Иван Ерофеевич. Участник ВОВ. С семьёй переехал в Калининградскую область. Умер 9.11.1955.' } },
    { data: { id: 'pelageya', label: 'Пелагея\nХлусова', image: 'photos/pelageya.jpg', local: 'yes', info: 'Хлусова Пелагея Филатьевна (1903 – 1977).' } },
    { data: { id: 'ivan_h', label: 'Иван\nХлусов', image: 'photos/ivan_h.jpg', local: 'yes', info: 'Хлусов Иван Игнатьевич. Оборонял Брестскую крепость. Приехал в Калининград в 1958 г. Умер в 1978 г.' } },
    { data: { id: 'makar_b', label: 'Макар\nБулыгин', image: 'photos/makar_b.jpg', local: 'no', info: 'Отец Александра, Бориса и Лидии.' } },
    { data: { id: 'maria_b', label: 'Мария\nБулыгина', image: 'photos/maria_b.jpg', local: 'no', info: 'Мать Александра, Бориса и Лидии.' } },
    { data: { id: 'iraida_t', label: 'Ираида\nТуранина', image: 'photos/iraida_t.jpg', local: 'no', info: 'Мать Анатолия Туранина.' } },
    { data: { id: 'ignat_m', label: 'Игнат\nМихновец', image: 'photos/ignat_m.jpg', local: 'no', info: 'Брат Михаила Михновца.' } }
];

// ============================================================
// 2. СВЯЗИ (рёбра)
// ============================================================
const relationships = [
    // Семья Ильи
    { data: { source: 'yulia',  target: 'anatoly', label: 'брак' } },
    { data: { source: 'yulia',   target: 'ilya' } },
    { data: { source: 'anatoly', target: 'ilya' } },
    { data: { source: 'anatoly', target: 'varvara' } },
    { data: { source: 'anatoly', target: 'daniil' } },
    { data: { source: 'anatoly', target: 'denis' } }, 

    // Семья Юлии
    { data: { source: 'sergey_m', target: 'yulia' } },
    { data: { source: 'svetlana', target: 'yulia' } },
    { data: { source: 'sergey_m', target: 'svetlana', label: 'брак' } },
    { data: { source: 'sergey_m', target: 'evgeny_m' } }, 
    { data: { source: 'svetlana', target: 'dmitry_b' } },

    // Семья Анатолия
    { data: { source: 'alexander_b', target: 'anatoly' } },
    { data: { source: 'lyubov',      target: 'anatoly' } },
    { data: { source: 'alexander_b', target: 'lyubov', label: 'брак' } },
    { data: { source: 'alexander_m', target: 'alexander_b' } },
    { data: { source: 'alexander_m', target: 'vladimir_b' } }, 
    { data: { source: 'alexander_m', target: 'boris_b' } },
    { data: { source: 'alexander_m', target: 'lidia_b' } },
    { data: { source: 'makar_b', target: 'alexander_m' } },
    { data: { source: 'maria_b', target: 'alexander_m' } },
    
    // Семья Любови
    { data: { source: 'anatoly_t', target: 'lyubov' } },
    { data: { source: 'anfisa', target: 'lyubov' } },
    { data: { source: 'anatoly_t', target: 'anfisa', label: 'брак' } },
    { data: { source: 'anatoly_t', target: 'viktor_t' } },
    { data: { source: 'iraida_t', target: 'anatoly_t' } },

    // Семья Светланы (Беловы)
    { data: { source: 'antonina',  target: 'svetlana' } },
    { data: { source: 'nikolay_b', target: 'svetlana' } },
    { data: { source: 'antonina',  target: 'nikolay_b', label: 'брак' } },
    { data: { source: 'petr_f', target: 'antonina' } },
    { data: { source: 'maria_f', target: 'antonina' } },
    { data: { source: 'petr_f', target: 'maria_f', label: 'брак' } },
    { data: { source: 'maria_f', target: 'nina_m' } },
    { data: { source: 'maria_f', target: 'zoya' } },
    { data: { source: 'maria_f', target: 'valentina_p' } },
    { data: { source: 'maria_f', target: 'ekaterina_k' } },
    { data: { source: 'ivan_b', target: 'nikolay_b' } },
    { data: { source: 'olga',   target: 'nikolay_b' } },
    { data: { source: 'ivan_b', target: 'olga', label: 'брак' } },
    { data: { source: 'ivan_b', target: 'mikhail_b' } },
    { data: { source: 'olga', target: 'mikhail_b' } },

    // Семья Сергея (Михновец)
    { data: { source: 'mikhail_m', target: 'sergey_m' } },
    { data: { source: 'klavdia_m', target: 'sergey_m' } },
    { data: { source: 'mikhail_m', target: 'klavdia_m', label: 'брак' } },
    { data: { source: 'ivan_h', target: 'klavdia_m' } },
    { data: { source: 'pelageya', target: 'klavdia_m' } },
    { data: { source: 'ivan_h', target: 'pelageya', label: 'брак' } },
    { data: { source: 'mikhail_m', target: 'ignat_m' } }, // Брат Михаила
    { data: { source: 'klavdia_b', target: 'alexander_b' } }
];

// ============================================================
// 3. СБОРКА ДАННЫХ ДЛЯ ВКЛАДКИ ЭКОНОМИКИ
// ============================================================
const econData = [
    {
        title: "Судостроительный завод «Янтарь»",
        text: "Самый массовый вклад в промышленность. Члены семьи работали на заводе десятилетиями: Сергей Михновец (сборщик КМС), Михаил Михновец (крановщик, слесарь), Клавдия Михновец (маляр, 52 года стажа), Евгений Михновец (рабочий завода)."
    },
    {
        title: "Завод ЖБИ-1 (Железобетонные изделия)",
        text: "Обеспечение стройки региона материалами. Здесь работали: Антонина Белова (плановик) и Николай Белов (водитель)."
    },
    {
        title: "Сельское хозяйство и рыболовство",
        text: "Обеспечение продовольственной безопасности. Любовь Булыгина работала в Мамоновском зверосовхозе, а Клавдия Булыгина — в совхозе поселка Мамоново. Николай Белов в 1970-х ходил в моря на рыболовных судах."
    },
    {
        title: "Рыбоконсервный комбинат",
        text: "Борис Булыгин (участник ВОВ) после войны был призван в Мамоново, где работал на рыбоконсервном комбинате в тарном цеху."
    },
    {
        title: "Финансовый сектор и инфраструктура",
        text: "Современный вклад. Юлия Булыгина работает специалистом операционного отдела в Энерготрансбанке. Светлана Михновец работала диспетчером на ПАП (пассажирские автоперевозки)."
    },
    {
        title: "Ликвидация техногенных катастроф",
        text: "Владимир Булыгин, проживавший в Мамоново, принимал участие в ликвидации последствий аварии на Чернобыльской АЭС, что является важным вкладом в безопасность страны."
    }
];

function renderEconList() {
    const container = document.getElementById('econ-list');
    container.innerHTML = '';
    econData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'econ-card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
        container.appendChild(card);
    });
}

// ============================================================
// 4. НАСТРОЙКА И ЗАПУСК ДРЕВА
// ============================================================
const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: { nodes: people, edges: relationships },
    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#a5d6a7', // Зеленый по умолчанию
                'background-image': 'data(image)',
                'background-fit': 'cover',
                'label': 'data(label)',
                'color': '#1b5e20',
                'text-valign': 'bottom',
                'text-halign': 'center',
                'text-margin-y': 4,
                'font-size': '10px', // Чуть меньше шрифт для 38 человек
                'font-weight': 'bold',
                'text-outline-color': '#ffffff',
                'text-outline-width': 2,
                'width': '60px', // Уменьшили кружки
                'height': '60px',
                'shape': 'ellipse',
                'text-wrap': 'wrap',
                'text-max-width': '80px',
                'border-width': 2,
                'border-color': '#81c784'
            }
        },
        {
            // ЯНТАРНАЯ РАМКА для местных
            selector: 'node[local = "yes"]',
            style: {
                'border-width': 4, // Толстая янтарная рамка
                'border-color': '#ffb300',
                'background-color': '#fff8e1'
            }
        },
        {
            selector: 'node:selected',
            style: { 'border-width': 6, 'border-color': '#ff6f00' }
        },
        {
            selector: 'edge',
            style: {
                'width': 1.5,
                'line-color': '#c8e6c9',
                'target-arrow-color': '#c8e6c9',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier',
                'label': 'data(label)',
                'font-size': '8px',
                'color': '#666',
                'text-background-color': '#ffffff',
                'text-background-opacity': 1,
                'text-background-padding': '1px'
            }
        }
    ],
    layout: { name: 'breadthfirst', directed: true, padding: 20, spacingFactor: 1.2 }
});

cy.on('tap', 'node', function (evt) {
    const data = evt.target.data();
    showInfoCard(data.label.replace(/\n/g, ' '), data.image, data.info);
});

function showInfoCard(title, image, info) {
    const old = document.getElementById('info-card');
    if (old) old.remove();

    const card = document.createElement('div');
    card.id = 'info-card';
    card.innerHTML = `
        <button class="close-btn" onclick="this.parentElement.remove()">×</button>
        ${image ? `<img src="${image}" alt="${title}">` : ''}
        <h2>${title}</h2>
        <p>${info || 'Описание пока не добавлено.'}</p>
    `;
    document.body.appendChild(card);
}

// ============================================================
// 5. ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
// ============================================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));

    if (tabName === 'tree') {
        document.getElementById('tab-tree').classList.add('active');
        document.getElementById('btn-tree').classList.add('active');
        cy.resize(); 
    } else if (tabName === 'econ') {
        document.getElementById('tab-econ').classList.add('active');
        document.getElementById('btn-econ').classList.add('active');
    }
}

renderEconList();