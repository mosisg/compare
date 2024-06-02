import Link from "next/link"
import '@/app/globals.css'



const Footer = () => {
  return (

   <footer className="text-white border-t ph_footer py-12" style={{ backgroundColor: "#012737" }}>
  <div className="mx-auto text-center">
    <div className="item_copyright whitespace-nowrap">
      <div className="made_with italic">
        <span className="text-green-500">
          {/* Add any additional text or icon here if needed */}
        </span>
      </div>
      <h6 className="text-xs leading-4 tracking-wide mb-4"></h6>
      <div className="copyrights">
        Copyright{" "}
        <Link
          href="#"
          title="Meilleurs Plans de Téléphonie Cellulaire - Trouvez les Prix les Moins Chers"
          className="ph_link"
        >
          Comparetelecom
        </Link>{" "}
        2024. Tous droits réservés -{" "}
        <Link href="/planhub/terms" title="Page : Conditions Générales de Service" className="text-white">
          Conditions Générales -{" "}
        </Link>{" "}
        <Link href="/planhub/privacy" title="Page : Votre Vie Privée Compte. Notre Politique de Confidentialité" className="text-white">
          Politique de Confidentialité -{" "}
        </Link>{" "}
        <Link href="/planhub/cookie" title="Page : Votre Vie Privée Compte. Notre Politique de Cookie" className="text-white">
          Politique de Cookie - {" "}
        </Link>
         <Link href="/planhub/cookie" title="Page : Votre Vie Privée Compte. Notre Politique de Cookie" className="text-white">
          Mention légale{" "}
        </Link>
      </div>
    </div>
  </div>
</footer>




  )
}

export default Footer