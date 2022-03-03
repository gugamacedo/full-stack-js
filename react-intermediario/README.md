- Um **component** React é uma função Javascript que retorna HTML (JSX)
  - Pra vias de organização, **component** é somente algo que recebe uma informação e exibe na tela. Não é algo que gerencia um determinado estado da minha aplicação.
  - Uma organização comum de pastas: `components` `pages` `partials` `templates`
- Componentes React são em UpperCase. Estrutura básica de um component React:
  ```Javascript
  import React from 'react' // importando o React, ele é uma lib, não framework

  // A função com o nome do arquivo, retornando HTML
  function App() {
    return (
    <div>
      <h1>Hello World</h1>
    </div>
    )
  }

  export default App // habilitando para importação
  ```
- Depois só importar e usar o component como tag: `<App />`
  - Se esse component for ter filhos, colocar assim: `<App> Conteúdo </App>`
- No retorno sempre tem que ter um elemento pai. Se não tem pai, pode usar o React fragment: `<></>`
- Com **props** é possível passar propriedades personalizadas, por parâmetros de função nas tags HTML pro JSX.
  - É preciso desestruturar porque ele vem como um objeto no parâmetro da função
  - Se quiser pegar o filho de um component, no *props* tem a propriedade `children`
- Comandos como o `innerHTML` não funcionam, porque o JSX retorna um objeto JS, não HTML. Nesse caso tem que usar o `appendChild()`
- O React não renderiza na página o código HTML, já que ele está em JSX. Isso prejudica o SEO do site, o Google não vai achar nada. Pra isso serve o framework NextJS, que é um framework para React, para fazer a renderização estática e pelo lado do servidor.
- O `class` do HTML, no JSX é `className`
- O *css* tem que ser um arquivo pra cada component, e também em UpperCase
- **useState**: quando você quer alterar o estado (*state*) de um component, precisa utilizar o useState.
  1. Importe ele junto com o React `{ useState }`
  2. `const [initialValue, setNewValue] = useState(estado inicial)` o primeiro parâmetro é a variável de valor inicial, que será utilizada como estado inicial no começo da aplicação. O segundo parâmetro é a variável do novo valor/estado, que vai fazer as atualizações. (Ambas variáveis são `const`). Dentro do `useState()` fica o valor inicial, que vai entrar no `initialValue`.
  3. Dentro do `handler` ou `listener` você coloca o `setNewValue(newValue)`. A variável `newValue` é só pra legebilidade, você poderia colocar o nome valor, ou a lógica diretamente aí.
- **useEffect**:
  - Recebe dois parâmetros. No exemplo de código, toda vez que a variável `count` tem o *state* alterado, executa o `useEffect` que altera o `title` da página pro `count`.
  - **Obs**: o `useEffect` tem um `return` opcional. Ele serve pra dizer o que fazer quando o *component* for "desmontado", quando ele deixar de existir
  1. Uma função de callback que executa o que você quer
  2. Um array de depedências. Se estiver vazio, então só executa uma vez. Se tiver uma variável, executa toda vez que a depência é alterada. Por ser um array, pode colocar múltiplas dependências.
  ```Javascript
  useEffect(() => {
    document.title = count

    return () => document.title = 'React App'
  }, [count])
  ```
