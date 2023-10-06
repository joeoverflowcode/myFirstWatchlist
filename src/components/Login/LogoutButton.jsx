import Button from 'react-bootstrap/Button'

export default function LogoutButton({ onLogout }) {
  return (
    <form onSubmit={onLogout}>
      {/* <Button type='submit'>Log Out</Button> */}
      <button type="submit">Log Out</button>
    </form>
  );
}

