import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kbtzcajoaynboqftcwbb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtidHpjYWpvYXluYm9xZnRjd2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjEwNjYsImV4cCI6MjA1OTkzNzA2Nn0.FmcZ5XbGYNdouCVa6Fd-d-qtg5D1HwL-8SU3PL3JJqk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
