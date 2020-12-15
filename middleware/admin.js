export default function ({ $gates, redirect }) {
  // If the user is not an admin
  if (!$gates.hasRole('admin')) {
    return redirect('/error')
  }
}