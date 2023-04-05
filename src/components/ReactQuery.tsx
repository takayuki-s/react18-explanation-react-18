import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AlbumList } from './AlbumList'
import { Sidebar } from './Sidebar'
import { TodoList } from './TodoList'

type Album = {
  userId: number
  id: number
  title: string
}

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>(
    'https://jsonplaceholder.typicode.com/albums'
  )
  return result.data
}

export const ReactQuery = () => {
  const { data } = useQuery<Album[]>(['albums'], fetchAlbums)
  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      {/* <p>ReactQuery</p>
      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))} */}
      <Sidebar />
      <div style={{ flexGrow: '1' }}>
        <AlbumList />
        <TodoList />
      </div>
    </div>
  )
}
