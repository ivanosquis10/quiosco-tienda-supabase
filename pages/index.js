import Layout from '../layout/Layout'
import { supabase } from '../supabase/supabase'

export default function Home({ data }) {
  return (
    <Layout pagina={'Inicio'}>
      <h1>hola</h1>
    </Layout>
  )
}

/*
export async function getServerSideProps() {
  const { data, error } = await supabase.from('categoria').select('*')

  return {
    props: {
      data,
    },
  }
}
*/
