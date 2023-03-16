import { createClient } from '@supabase/supabase-js'

// export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export const supabase = createClient(
  'https://ivfsxcytscvmvbzxmlhj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZnN4Y3l0c2N2bXZienhtbGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyODY5MTUsImV4cCI6MTk5Mzg2MjkxNX0.sbWT-mPNxvArrwllzfv0Y-dgDmxqe3e2qIGNnP7gG2w'
)
