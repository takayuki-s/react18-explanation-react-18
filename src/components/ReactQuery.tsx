import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
  const { isLoading, error, data } = useQuery<Album[]>(
    ['albums'],
    fetchAlbums,
    { suspense: true }
  )

  // if (error) return <p>エラー</p>
  // if (isLoading) return <p>ロード中</p>

  return (
    <div>
      <p>ReactQuery</p>
      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))}
    </div>
  )
}
