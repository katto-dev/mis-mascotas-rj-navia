import { useEffect, useState} from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const disminuir = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-outline-danger" onClick={disminuir}>-</button>
            <span className='cantidad'>{ count }</span>
            <button type="button" className="btn btn-outline-success" onClick={aumentar}>+</button>
            <p>
                {
                    stock
                    ? <button type="button" className="btn btn-outline-primary" onClick={()=> onAdd(count)}>Agregar al carrito</button>
                    : <button type="button" className="btn btn-outline-primary" disabled>Agregar al carrito</button>
                }
            </p>
        </>
    );
}

export default ItemCount;