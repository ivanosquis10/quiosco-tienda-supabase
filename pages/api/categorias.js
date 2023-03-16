import { supabase } from '../../supabase/supabase'

export default async function handler(req, res) {
  const { data, error } = await supabase.from('categoria').select('*')

  if (error) {
    return res.status(500).json({ message: error })
  }

  return res.status(200).json({ data })
}
