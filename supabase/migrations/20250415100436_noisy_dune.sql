/*
  # Enable RLS for chauffeurs table

  1. Security Changes
    - Enable Row Level Security (RLS) on chauffeurs table
    - Add policy for authenticated users to read all chauffeurs
    - Add policy for authenticated users to manage their own records
*/

-- Enable RLS
ALTER TABLE chauffeurs ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to read all chauffeurs
CREATE POLICY "Anyone can view chauffeurs"
  ON chauffeurs
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow users to manage their own records
CREATE POLICY "Users can manage own chauffeur profile"
  ON chauffeurs
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);