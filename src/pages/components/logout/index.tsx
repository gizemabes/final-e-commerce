import { useRouter } from 'next/router';

const logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    // localStorage'ten token'ı kaldır
    localStorage.removeItem('token');
    // Giriş yap sayfasına yönlendir
    router.push('/login');
  };

  return (
    <div style={{ color: '#349590', cursor: 'pointer' }} onClick={handleLogout}>
      Çıkış yap
    </div>
  );
};

export default logout;