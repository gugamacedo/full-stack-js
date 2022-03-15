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
  - Se quiser pegar o filho de um component, no _props_ tem a propriedade `children`
- Comandos como o `innerHTML` não funcionam, porque o JSX retorna um objeto JS, não HTML. Nesse caso tem que usar o `appendChild()`
- O React não renderiza na página o código HTML, já que ele está em JSX. Isso prejudica o SEO do site, o Google não vai achar nada. Pra isso serve o framework NextJS, que é um framework para React, para fazer a renderização estática e pelo lado do servidor.
- O `class` do HTML, no JSX é `className`
- O _css_ tem que ser um arquivo pra cada component, e também em UpperCase
- Quando está usando o `export const` (não o `export default`) na hora do *import* tem que ser entre `{}`
- **useState**: quando você quer alterar o estado (_state_) de um component, precisa utilizar o useState.
  1. Importe ele junto com o React `{ useState }`
  2. `const [initialValue, setNewValue] = useState(estado inicial)` o primeiro parâmetro é a variável de valor inicial, que será utilizada como estado inicial no começo da aplicação. O segundo parâmetro é a variável do novo valor/estado, que vai fazer as atualizações. (Ambas variáveis são `const`). Dentro do `useState()` fica o valor inicial, que vai entrar no `initialValue`.
  3. Dentro do `handler` ou `listener` você coloca o `setNewValue(newValue)`. A variável `newValue` é só pra legebilidade, você poderia colocar o nome valor, ou a lógica diretamente aí.
- **useEffect**:

  - Recebe dois parâmetros. No exemplo de código, toda vez que a variável `count` tem o _state_ alterado, executa o `useEffect` que altera o `title` da página pro `count`.
  - **Obs**: o `useEffect` tem um `return` opcional. Ele serve pra dizer o que fazer quando o _component_ for "desmontado", quando ele deixar de existir

  1. Uma função de callback que executa o que você quer
  2. Um array de depedências. Se estiver vazio, então só executa uma vez. Se tiver uma variável, executa toda vez que a depência é alterada. Por ser um array, pode colocar múltiplas dependências.

  ```Javascript
  useEffect(() => {
    document.title = count

    return () => document.title = 'React App'
  }, [count])
  ```

- **React Router** é uma biblioteca que cuida das rotas/navegação, em aplicações React. Instalação `npm install react-router-dom`. Estrutura básica da declaração das rotas:

  ```Javascript
  // importando os component necessários
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
  ```

  - Tem que colocar duas configurações no index.html: `<meta name="viewport" content="initial-scale=1, width=device-width" />` e `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`
  - Na página onde ficará o menu de navegação:

  ```Javascript
  // importando os componentes necessários
  import { Link } from 'react-router-dom'

  <ul>
  // Repare que não se usa "a href" e sim "Link to"
    <li><Link to="/">Home</Link></li>
    <li><Link to="/users">Usuários</Link></li>
  </ul>
  ```

  - **Obs:** uma coisa bem legal é que o component **Link to** não vai até o servidor buscar a página, tanto que a página nem recarrega. É como se ele "escondesse" a página atual, e mostrasse a nova. Ao contrário do `a href` que manda a requisição pro server e retorna pro client. Com o **`Link to`** tudo acontecesse do lado do próprio client.
    E se você estpa se perguntando "mas as rotas não são feitas no backend com o **Node**?" Primeiro que se não tiver back, isso já nem importa. Segundo que no caso da estrutura de nossos projetos, sempre faremos a **API-Restful** separada do front, fazendo requisições pelo frontend da aplicação. Então nesse caso as rotas podem perfeitamente serem feitas no frontend, mesmo existindo backend.

- **Material.UI** é uma biblioteca com components prontos e estilizados, para aplicações React, baseado no tema _Material_ da _Google_. Link: [mui.com/pt/components/](https://mui.com/pt/components/)
  - Instalação `npm install @mui/material @mui/icons-material @emotion/react @emotion/styled`
  - A biblioteca `icons-material` não permite desestruturação
- **useStyles**: para aplicar CSS dentro do JS 🤯🤯🤯 Se o CSS for grande, normalmente se cria uma **pasta** pra cada component que será estilizado, com um arquivo pro component e outro pro estilo dele, ex: `Header/Header.js` e `Header/Header.style.js`

  - No arquivo do **component style**:

  ```Javascript
  import { makeStyles } from '@material-ui/core/styles'

  const useStyles = makeStyles(() => ({
    title: { // nome da propriedade/classe
      marginLeft: 10, // se a propriedade CSS tive traço - colocar em camelCase
    }
  }))

  export default useStyles
  ```

  - No arquivo do component:

  ```Javascript
  import useStyles from './Header.style'

  const Header = () => {
    const classes = useStyles()

    return (
      // e dentro do componente colocar "className={classes.title}"
    )
  }
  ```

- No component **Grid** do React, você pode usar propriedades **flex** como **props**, e também fazer a responsividade de forma bem simples (também passando por props):
  - **XS**: extra small (até 576px)
  - **SM**: small (até 768px)
  - **MD**: medium (até 992px)
  - **LG**: large (até 1200px)
  - **XL**: extra large (até 1400px)
  - **XXL**: extra extra large (maior que 1400px)
- É uma boa prática organizar o código na seguinte ordem: definições de hooks, depois states, os useEffect, e por fim os Handle.
- **CSS module**: uma maneira alternativa de fazer o CSS no React. Basicamente todo arquivo de CSS terá um `.module` antes de `.css` e no arquivo JS o import será assim: `import style from './Algo.module.css'`. E na hora de definir o _className_ será um objeto: `className={style.classe}`
- **Styled Components**: traduzindo **Componentes estilizados**. É simplesmente isso hahahaha Você faz o CSS dentro do JS, no mesmo arquivo do component. Pra utilizar tem que rodar no terminal `npm install --save styled-components`. Depois no arquivo do component você importa assim `import styled from 'styled-components'`. Depois cria uma `const` com o nome do componente que será estilizado (components sempre em letra maiúscula), ex abaixo, e usa o componente normalmentecomo tag, podendo abrir, passar props, usar propriedades do próprio elemento HTML, etc.

  ```Javascript
  const Square = styled.div`
    width: 200px;
    height: 200px;
    background-color: violet;
  `

  <Square>
    <span>teste</span>
  </Square>
  ```
