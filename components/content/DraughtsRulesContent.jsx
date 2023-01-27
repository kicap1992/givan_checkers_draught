import { Text, VStack } from '@chakra-ui/react';

export function DraughtsRulesContent() {
  return (
    <VStack align="start" spacing={2}>
      <Text>
        Permainan draf dimainkan di papan catur 64 persegi dengan delapan
        deretan kotak berwarna gelap dan terang bergantian.
      </Text>
      <Text>
        Ada dua pemain dan masing-masing memulai permainan dengan masing-masing 12 draf
        pemain memiliki warna mereka sendiri.
      </Text>
      <Text>
        Para pemain menempatkan draf mereka di tiga baris kotak gelap yang
        paling dekat dengan mereka.
      </Text>
      <Text>Para pemain kemudian mulai bermain, melakukan satu gerakan pada satu waktu.</Text>
      <Text>
        Tujuan permainan ini adalah membuat lawan tidak bisa bergerak
        ketika tiba giliran mereka.
      </Text>
      <Text>
        Ini dilakukan dengan mengambil semua bidak mereka sepanjang permainan, atau
        memblokir mereka sehingga mereka tidak punya tempat untuk bergerak.
      </Text>
      <Text>
        Draf tunggal hanya dapat bergerak dalam arah diagonal ke depan ke a
        persegi tanpa bagian lain di dalamnya.
      </Text>
      <Text>
        Jika bidak lawan ada di kotak berikutnya, pemain bisa melompat
        di atasnya dan tangkap, lepaskan potongan itu dari papan. Mereka hanya bisa
        lakukan ini jika kotak berikutnya kosong.
      </Text>
      <Text>Pemain tidak pernah bisa melompati bagian mereka sendiri.</Text>
      <Text>
        Ketika seorang pemain berjalan melintasi papan ke yang lain
        sisi pemain, bidak mereka akan berubah menjadi Raja. Ketika ini terjadi,
        salah satu bidak yang diambil sebelumnya akan diletakkan di atas bidak
        yang membuatnya ke sisi itu.
      </Text>
      <Text>
        Setelah sepotong dibuat menjadi raja, itu akan dapat bergerak maju dan
        mundur, memberikan lebih banyak kesempatan untuk menangkap bagian lawan.
      </Text>
      <Text>
        Seorang raja dapat melompat sebanyak mungkin sehubungan dengan
        kotak yang diperlukan sedang kosong. Namun, raja tidak bisa melompati
        potongan-potongan yang memiliki warna yang sama dengan mereka.
      </Text>
      <Text>
        Permainan akan berakhir setelah pemain tidak bisa lagi bergerak.
      </Text>
      <Text>
        Jika kedua pemain tidak bisa bergerak kemana-mana, permainan akan berakhir dengan a
        mengikat, atau menggambar.
      </Text>
    </VStack>
  );
}
