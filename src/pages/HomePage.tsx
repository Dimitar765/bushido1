import Card from "../components/Card"

function HomePage() {
  return (
    <>
      <div className="bg-slate-100">
        <section className="relative">
          <img className="w-full " src="back.jpg" alt="" />
          <div className="absolute inset-0 opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-xl md:text-5xl font-bold text-red-500 uppercase">Karate Klub Bushido SAN</h2>
          </div>
        </section>
        <div className="flex justify-between">
          <div className="mt-36">
            <img className="" src="wado.jpg" alt="" />
          </div>
          <div className="text-md md:mt-20 text-justify text-xl p-5 w-2/3 tracking-tighter">
            <p> Karate klub Bushido SAN osnovan je 10.marta 2020. godine i jedan je od retkih klubova u kojem se uci Wado Kai/Wado Ryu stil.
              Osnivaci su Aleksandar Makic, nosilac crnog pojasa 3.dan, licencirani trener i sudija. Uros Jovanovic, nosilac crnog pojasa 1.dan, licencirani trener i sudija. Marko Makic, nosilac crnog pojasa 1.dan i licencirani trener.
              Lokacija na kojoj drzimo treninge je u okviru teretane Puls Fitnes na Novom Beogradu(Bulevar Arsenija Carnojevica 165).
              Wado-Ryu ili Wadoryu stil je jedan od najvecih 6 stilova u karateu, pored Shotokana, Shitoryu, Gojoryu, Kyokushin  i Kenpo.Osnivac je Hironori Otsuka.Vizuelno, jako je slican SHotokan stilu, ali ima pojedinih kljucnihb razlika u samim tehnikama i nacinu njihovog izvodjenja.
              Zasto Wadoryu? Zato sto u sebi sadrzi tradicionalni Shotokan duh sa implementovanim elementima Judoa i Jiu Jitse.Sta to u praksi znaci?Visi stavovi, zdravija kolena, efektivniji nacini nosenja sa modernim borilackim sportovima.
              Karate klub Bushido SAN clan je Srpske Karate Unije u okviru WKC-a(World Karate Confederation);I pored toga, nas klub ucestvuje na takmicenjima i drugih federacija i unija i tako odrzavamo zdrav odnos sa svim ljubiteljima karate vestine u regionu.
              Sustinski cilj osnivanja bila je iskrena zelja da nasoj deci, omladini ali i starijima omogucimo jednu zdravu sredinu u kojoj ce vredno trenirati, ici zajedno na takmicenja, druziti se ali i danoinocno usavrsavati se.
              Od pocetka rada kluba, imamo nosioce zlatnih, srebrnih i bronzanih medalja sa kako balkanskih i evropskih, tako i svetskih takmicenja.</p>
          </div>
          <div className="mt-36">
            <img src="wado.jpg" alt="" />
          </div>
        </div>

        <Card />

      </div>
    </>
  )
}

export default HomePage
