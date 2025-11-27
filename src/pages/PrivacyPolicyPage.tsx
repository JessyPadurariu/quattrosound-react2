export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400">Ultimo aggiornamento: 27 Novembre 2025</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduzione</h2>
            <p className="text-gray-300 leading-relaxed">
              QuattroSound si impegna a proteggere la privacy dei propri clienti e visitatori del sito web.
              La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le informazioni personali
              in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Dati Raccolti</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Raccogliamo le seguenti tipologie di informazioni:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Dati di contatto:</strong> nome, email, numero di telefono, indirizzo</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Dati dell'evento:</strong> tipologia evento, data, location, requisiti tecnici</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Dati commerciali:</strong> preventivi richiesti, ordini effettuati, pagamenti</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Finalità del Trattamento</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Utilizziamo i dati personali per:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Gestire richieste di preventivo e fornire servizi</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Comunicare con i clienti riguardo agli eventi</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Elaborare ordini e pagamenti</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Migliorare i nostri servizi e l'esperienza utente</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Inviare comunicazioni di marketing (previo consenso)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Base Giuridica del Trattamento</h2>
            <p className="text-gray-300 leading-relaxed">
              Il trattamento dei dati personali si basa su: esecuzione di un contratto, consenso esplicito dell'interessato,
              adempimento di obblighi legali, legittimo interesse del titolare del trattamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Condivisione dei Dati</h2>
            <p className="text-gray-300 leading-relaxed">
              I dati personali possono essere condivisi con fornitori di servizi terzi (trasportatori, tecnici),
              fornitori di servizi di pagamento, autorità competenti quando richiesto dalla legge.
              Non vendiamo né affittiamo i dati personali a terze parti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Conservazione dei Dati</h2>
            <p className="text-gray-300 leading-relaxed">
              Conserviamo i dati personali per il tempo necessario a fornire i servizi richiesti e per adempiere
              agli obblighi legali. I dati di contatto e commerciali vengono conservati per 10 anni ai fini fiscali.
              I dati di marketing vengono conservati fino alla revoca del consenso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Diritti dell'Interessato</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In conformità con il GDPR, hai diritto a:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Accedere ai tuoi dati personali</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Rettificare dati inesatti o incompleti</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Richiedere la cancellazione dei dati</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Limitare il trattamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Opporti al trattamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Richiedere la portabilità dei dati</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Revocare il consenso in qualsiasi momento</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Sicurezza</h2>
            <p className="text-gray-300 leading-relaxed">
              Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i dati personali
              da accessi non autorizzati, perdita, distruzione o alterazione. Utilizziamo crittografia SSL per le
              comunicazioni via web e limitiamo l'accesso ai dati solo al personale autorizzato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Cookie</h2>
            <p className="text-gray-300 leading-relaxed">
              Il nostro sito utilizza cookie per migliorare l'esperienza utente. Per maggiori informazioni,
              consulta la nostra <a href="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contatti</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Per esercitare i tuoi diritti o per qualsiasi domanda sulla presente Privacy Policy, contattaci:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 space-y-2 text-gray-300">
              <p><strong className="text-white">QuattroSound</strong></p>
              <p>Via Monte Nero 36, 00012 Guidonia Montecelio (RM)</p>
              <p>Email: <a href="mailto:privacy@quattrosound.it" className="text-cyan-400 hover:underline">privacy@quattrosound.it</a></p>
              <p>Telefono: <a href="tel:+393208980405" className="text-cyan-400 hover:underline">+39 320 898 0405</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              Ci riserviamo il diritto di modificare la presente Privacy Policy. Eventuali modifiche sostanziali
              verranno comunicate tramite il sito web o via email. Ti invitiamo a consultare periodicamente
              questa pagina per rimanere aggiornato.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
