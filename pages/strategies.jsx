import Head from 'next/head';
import { AspectRatio, Text, VStack } from '@chakra-ui/react';
import { MainLayout } from '../components/layout/MainLayout';

export default function History() {
  return (
    <MainLayout>
      <Head>
        <title>Givan Checkers - Strategi &amp; Pembukaan</title>
      </Head>
      <VStack p={[3, 0]} spacing={6}>
        <Text>
          Draf, juga dikenal sebagai checkers, adalah permainan papan strategi yang memiliki
          telah ada selama ribuan tahun. Ada banyak varian, tapi
          versi paling umum dimainkan di papan kotak-kotak 8x8. Keduanya
          permainan pemain terdiri dari dua belas buah (pria, catur, draft)per
          samping. Potongan dimulai dari tiga baris pertama pada warna hitam/gelap
          kotak saja. Pria hanya bisa maju secara diagonal &quot;melompat&quot; lebih
          bagian itu dan mendarat di ruang kosong yang berdekatan. Setelah semua pria memiliki
          ditangkap, permainan dimenangkan. Permainan juga bisa dimenangkan melalui
          menghalangi kemampuan lawan untuk bergerak. Ada banyak taktik yang berguna
          untuk meningkatkan peluang keberhasilan Anda.
        </Text>
        <Text>
          Menobatan, atau menjadikan raja, sangat meningkatkan kekuatan dan portabilitas
          laki-laki Anda. Jika Anda bisa mendapatkan bagian ke garis dasar pemain lain, itu
          bisa &quot;dimahkotai&quot;. Sepotong lain ditempatkan di atas
          membedakannya dari draf biasa. Raja sekarang dapat dipindahkan keduanya
          maju dan mundur, secara efektif menggandakan jangkauannya.
        </Text>
        <Text>
          Karena pria yang menangkap membutuhkan kotak kosong untuk dilompati, memang begitu
          bijaksana untuk memindahkan Anda potongan secara massal. Cobalah untuk tidak meninggalkan potongan individu
          terpencil. Pindahkan lebih sedikit potongan dalam formasi ketat.
        </Text>
        <Text>
          Cobalah untuk meninggalkan orang-orang garis dasar Anda di stasiun selama mungkin.
          Kotak bebas apa pun berpotensi untuk penobatan oposisi. Mereka akan
          tidak dapat membuat raja jika mereka tidak bisa mendarat di sana.
        </Text>
        <Text>
          Draf, seperti permainan papan lainnya, bekerja berdasarkan prinsip umum
          bertukar potongan setiap kali ada yang di depan. Keuntungan material dari memiliki
          hanya satu orang tambahan menjadi lebih signifikan secara proporsional semakin sedikit
          potongan tetap. Peluang mahkota akan meningkat pesat. Satu
          peringatan untuk prinsip umum ini, adalah mengabaikan keunggulan posisi
          untuk keuntungan materi buta. Seorang raja bisa sangat mengubah jalannya permainan
          dengan cepat.
        </Text>
        <Text>
          Mengorbankan draf bisa tampak sembrono atau ceroboh. Tapi ini
          strategi dapat digunakan untuk menarik keuntungan posisional. Untuk menghapus a
          potongan dasar dalam persiapan untuk penobatan misalnya, akan menjadi a
          penggunaan taktik pengorbanan yang baik.
        </Text>
        <Text>
          Aturan draf menyatakan bahwa jika lawan menawarkan bagian untuk
          menangkap, itu harus diambil. &quot;gerakan paksa&quot; dapat
          dipekerjakan untuk keuntungan besar. Jika draf lawan menghalangi Anda
          cara membuat raja, Anda dapat memajukan bagian lain ke sisi lain
          dari pemblokir yang menyinggung. Ini akan memaksa lawan Anda untuk menangkap
          memungkinkan jalur yang jelas ke garis belakang untuk penobatan.
        </Text>
        <Text>
          Memblokir digunakan untuk menggagalkan gerakan oposisi. Itu membutuhkan yang baik
          banyak pemikiran ke depan oleh pemain lawan. Mencoba untuk yang kedua
          menebak rencana atau rangkaian gerakan membutuhkan pengetahuan yang baik tentang
          strategi. Sementara pemblokiran bersifat defensif dalam tujuannya (untuk mencegah
          pemain lain dari maju) itu dapat menghasilkan posisi menang. Aku jatuh
          potongan lawan diblokir dan dia tidak bisa bergerak, sesuai
          dengan aturan permainan, dia kalah dalam permainan.
        </Text>
        {/*<Text>Here&apos;s a great video on draughts strategies:</Text>*/}
        {/*<AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/Lfo3yfrbUs0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>*/}
      </VStack>
    </MainLayout>
  );
}
