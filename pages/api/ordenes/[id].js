import { supabase } from '../../../supabase/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.query
    const { data, error } = await supabase
      .from('orden')
      .update({ estado: true })
      .eq('id', id)

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json({ data })
  }
}
