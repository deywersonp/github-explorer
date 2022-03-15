import { useState } from 'react';

// imutabilidade

// - A imutabilidade é um conceito da computação que diz que o valor de uma variável não pode sofrer alteração;
// - Outras linguagens, como a linguagem funcional, por exemplo, também fazem uso da imutabilidade;
// - Veja o exemplo abaixo: No primeiro momento, temos uma variável na memória chamada `usuarios`, um vetor com 2 itens;
// - O que nós normalmente faríamos para adicionar um novo elemento seria fazer um push dentro da variável usuários, porém isso fará com que a variável usuários seja alterada (sofra mutação);
// - Para continuarmos com o conceito de imutablidade o correto seria criarmos uma nova variável e fazer um spread operator na variável anterior, e  em seguida adicionar o novo valor (linha 9);
// - A ação acima é realizada toda a vez que utilizamos o setState do React: É sempre criado uma nova variável com o mesmo nome na memória porém com valor diferente, respeitando assim o conceito da imutabilidade;
// - Portanto, toda vez que é chamado o setCounter no código abaixo significa que está sendo criada uma nova variável na memória, chamada counter, com o valor counter +1;

// usuarios = ['diego3g', 'diegosf']

// usuarios.push('rafacamarda')

// novoUsuarios = [...usuarios, 'rafacamarda']

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}