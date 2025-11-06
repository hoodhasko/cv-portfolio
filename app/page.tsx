export default function Home() {
  return (
    <section className="max-w-3xl mx-auto text-center mt-16">
      <h1 className="text-4xl font-bold mb-4">
        👋 Привет, я React Native разработчик
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Создаю мобильные приложения для iOS и Android на React Native.
      </p>
      <p>
        Посмотри мои{" "}
        <a href="/projects" className="text-blue-600 underline">
          проекты
        </a>{" "}
        или загляни в{" "}
        <a href="/cv" className="text-blue-600 underline">
          CV
        </a>
        .
      </p>
    </section>
  );
}
