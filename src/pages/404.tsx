import { Frown } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col justify-center gap-2 text-center">
      <Frown className="mx-auto h-10 w-10" />
      <h1 className="text-6xl font-bold">404: Página não encontrada</h1>

      <div className="mt-6">
        <Button asChild variant="destructive">
          <Link to="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </div>
  )
}
