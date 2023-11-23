export function Footer() {


  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 fixed bottom-0 right-0 w-full">
      <div className="w-full mx-auto max-w-screen p-4 flex items-center justify-center space-x-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-0">{`© 2023 `}
          <a href="https://www.linkedin.com/in/eubrunodeoliveira/" target="_blank" className="hover:underline ">Bruno de Oliveira</a>
        </span>
        <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li className="mr-4">
            <a href="https://github.com/OliveiraBruno24" target="_blank" className="hover:underline">GitHub</a>
          </li>
          <li>
            <a href="https://github.com/OliveiraBruno24/carrinho-de-compras-Solve-Light" target="_blank" className="hover:underline">Repository</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
