export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cookie <span className="text-cyan-400">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400">Ultimo aggiornamento: 27 Novembre 2025</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-gray-300 leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
              Vengono utilizzati per far funzionare i siti web in modo più efficiente e per fornire informazioni ai
              proprietari del sito. I cookie ci aiutano a migliorare l'esperienza utente e a fornire contenuti personalizzati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Tipologie di Cookie Utilizzati</h2>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cookie Tecnici (Necessari)</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.
                </p>
                <ul className="space-y-2 text-gray-300 mt-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie di sessione per la navigazione e l'accesso alle aree riservate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie per il carrello acquisti e il processo di checkout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie di sicurezza per prevenire frodi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cookie Analitici</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Ci aiutano a capire come i visitatori interagiscono con il sito web raccogliendo informazioni in forma anonima.
                </p>
                <ul className="space-y-2 text-gray-300 mt-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Google Analytics: per analizzare il traffico del sito</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie per misurare l'efficacia delle campagne pubblicitarie</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cookie di Funzionalità</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Permettono di ricordare le tue preferenze e fornire funzionalità avanzate.
                </p>
                <ul className="space-y-2 text-gray-300 mt-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie per salvare le preferenze linguistiche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie per ricordare le impostazioni di visualizzazione</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cookie di Marketing</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Utilizzati per tracciare i visitatori attraverso i siti web per mostrare annunci pertinenti.
                </p>
                <ul className="space-y-2 text-gray-300 mt-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie di remarketing per mostrare annunci personalizzati</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Cookie dei social media per condivisione contenuti</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookie di Terze Parti</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Il nostro sito utilizza servizi di terze parti che possono installare i propri cookie:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Google Analytics:</strong> per l'analisi del traffico web</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Facebook Pixel:</strong> per il remarketing e l'analisi delle conversioni</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>YouTube:</strong> per la riproduzione di video incorporati</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span><strong>Google Maps:</strong> per la visualizzazione di mappe interattive</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Durata dei Cookie</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Cookie di Sessione:</strong> Vengono eliminati automaticamente alla chiusura del browser.
              </p>
              <p>
                <strong className="text-white">Cookie Persistenti:</strong> Rimangono memorizzati sul dispositivo per un periodo
                determinato (da pochi giorni a diversi anni) o fino alla loro eliminazione manuale.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Gestione dei Cookie</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Puoi gestire o eliminare i cookie secondo le tue preferenze. Puoi eliminare tutti i cookie già presenti
              sul tuo dispositivo e impostare la maggior parte dei browser per impedire che vengano salvati.
            </p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
              <p className="text-cyan-300 mb-4">
                <strong>Nota:</strong> Disabilitare i cookie potrebbe compromettere alcune funzionalità del sito web.
              </p>
              <p className="text-gray-300 text-sm">
                Per gestire le preferenze dei cookie, accedi alle impostazioni del tuo browser:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm mt-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Safari:</strong> Preferenze → Privacy → Gestisci cookie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Consenso</h2>
            <p className="text-gray-300 leading-relaxed">
              Utilizzando il nostro sito web e accettando i cookie tramite il banner, acconsenti all'uso dei cookie
              in conformità con questa Cookie Policy. Puoi modificare o revocare il tuo consenso in qualsiasi momento
              attraverso le impostazioni del browser o del pannello di gestione cookie del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Aggiornamenti</h2>
            <p className="text-gray-300 leading-relaxed">
              Potremmo aggiornare questa Cookie Policy periodicamente per riflettere modifiche alle nostre pratiche
              o per altri motivi operativi, legali o normativi. Ti invitiamo a consultare regolarmente questa pagina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contatti</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Per domande riguardanti questa Cookie Policy, contattaci:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 space-y-2 text-gray-300">
              <p><strong className="text-white">QuattroSound</strong></p>
              <p>Via Monte Nero 36, 00012 Guidonia Montecelio (RM)</p>
              <p>Email: <a href="mailto:info@quattrosound.it" className="text-cyan-400 hover:underline">info@quattrosound.it</a></p>
              <p>Telefono: <a href="tel:+393208980405" className="text-cyan-400 hover:underline">+39 320 898 0405</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
