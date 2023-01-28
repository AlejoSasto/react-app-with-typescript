import { useState } from 'react';
import { ResponseAPI } from '../api';

export const GetPost = () => {

    const [posts, setPosts] = useState<ResponseAPI[]>([])

    return (
        <>
            <h1>Get Post 👇</h1><br />
            <h2>posts list</h2>

            <div className='grid'>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <p>id Marca: <span>{post.id_marca}</span></p>
                            <p>Nombre: <span>{post.Nombre}</span></p>
                            <p>activo: <span>{post.activo}</span></p>
                            <p>Item ya activo: <span>{post.item_ya_usado}</span></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}