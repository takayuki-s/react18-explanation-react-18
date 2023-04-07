import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { AlbumList } from './AlbumList'
import { Sidebar } from './Sidebar'
import { TodoList } from './TodoList'

export const ReactQuery = () => {
  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <Sidebar />
      <div style={{ flexGrow: '1' }}>
        <ErrorBoundary fallback={<p>Listエラー</p>}>
          <Suspense fallback={<p>Listロード中</p>}>
            <AlbumList />
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
