import { supabase } from '../../supabase/supabase'

const GetOrdenes = async (req, res) => {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('orden')
      .select()
      .eq('estado', false)

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json({ data })
  }
}
export default GetOrdenes