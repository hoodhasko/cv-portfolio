import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <section className="bg-white shadow-md rounded-2xl p-8 border mb-10">
        <div className="md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1">
              Привет! 👋
            </h1>
            <p className="text-lg text-gray-800 font-medium mb-3">
              Меня зовут Александр, я являюсь React Native разработчиком.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-4 text-sm">
            <Link
              href="https://github.com/hoodhasko"
              target="_blank"
              className="px-4 py-2 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50 hover:bg-gray-100"
            >
              GitHub
            </Link>
            <Link
              href="https://t.me/dopitito"
              target="_blank"
              className="px-4 py-2 border rounded-xl shadow-sm hover:shadow-md transition bg-blue-50 hover:bg-blue-100 text-blue-700"
            >
              Telegram
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-8 border mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Обо мне</h2>
        <p className="text-gray-700 leading-relaxed">
          Занимаюсь разработкой мобильных приложений на{" "}
          <strong>React Native</strong> с 2022 года. Полный цикл — от
          проектирования архитектуры, работы с дизайнером и бэкенд
          разработчиками до публикации в <strong>App Store</strong>,{" "}
          <strong>Google Play</strong> и <strong>RuStore</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          В повседневных задачах — аналитика, декомпозиция, реализация нового
          функционала и рефакторинг. Люблю писать чистый, поддерживаемый код и
          доводить детали интерфейса до идеала.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <Link
            href="/projects"
            className="px-4 py-2 border rounded-xl shadow-sm hover:shadow-md transition bg-blue-50 hover:bg-blue-100 text-blue-700"
          >
            Реализованные проекты
          </Link>
        </p>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-8 border mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Hard skills
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "React Native",
              "JavaScript",
              "TypeScript",
              "RTK/RTK Query",
              "REST API",
              "Axios",
              "WebSockets",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Docker",
              "Git",
              "Figma",
              "Postman",
              "Zustand",
              "NestJS",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {["NestJS", "PostgreSQL", "JWT", "TypeORM", "DrizzleORM"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-8 border mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Soft skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Самостоятельно организую рабочее время</li>
          <li>Внимателен к деталям</li>
          <li>Умею признавать ошибки</li>
          <li>Быстро нахожу общий язык с командой</li>
          <li>Собираю недостающую информацию по задаче</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-8 border mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Опыт работы
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              React Native Developer — ООО “Талан Онлайн”
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Рефакторинг из классовых компонентов в функциональные</li>
              <li>Разработка приложения с нуля</li>
              <li>Redux Toolkit, Redux Persist, Sentry</li>
              <li>Создание кастомных меню и навигации</li>
              <li>Публикация приложений в App Store, Google Play, RuStore</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Специалист по сопровождению и тестированию — ООО “Талан Онлайн”
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Ручное тестирование веб и мобильных приложений</li>
              <li>Техническая поддержка клиентов</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Системный администратор — Аура Автодом
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Поддержка работы сети и серверов</li>
              <li>Настройка и ремонт офисной техники</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Программист — Стерлитамакский химико-технологический колледж
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Поддержка и развитие сайта колледжа</li>
              <li>Техническая поддержка пользователей</li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" mb-8">
        <div className="bg-white shadow-md rounded-2xl p-8 border">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Образование
          </h2>
          <p className="text-gray-700">
            <strong>
              Башкирский государственный университет (Стерлитамак)
            </strong>
            <br />
            Физико-математический факультет —{" "}
            <em>
              Математическое обеспечение и администрирование информационных
              систем
            </em>
          </p>
        </div>
      </section>
    </main>
  );
}
