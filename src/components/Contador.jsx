import { useState } from "react"

export const Contador = () => {

  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor actual del contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Disminuir
      </button>
      <button onClick={() => setContador(0)}>
        Restablecer
      </button>
    </div>
  )
}