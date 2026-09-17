import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: instruments } = await supabase.from('instruments').select()

  return (

    <ul>
      {instruments?.map((instruments) => (
        <li key={instruments.id}>{instruments.name}</li>
      ))}
    </ul>
  )
}
