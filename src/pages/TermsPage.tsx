export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Termini e <span className="text-cyan-400">Condizioni</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400">Ultimo aggiornamento: 27 Novembre 2025</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Premessa</h2>
            <p className="text-gray-300 leading-relaxed">
              I presenti Termini e Condizioni regolano l'utilizzo del sito web www.quattrosound.it e dei servizi
              offerti da QuattroSound. Utilizzando il nostro sito web e i nostri servizi, accetti integralmente
              questi termini. Se non accetti questi termini, ti preghiamo di non utilizzare il nostro sito web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Servizi Offerti</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              QuattroSound fornisce i seguenti servizi:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Noleggio di schermi LED wall per eventi</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Noleggio di impianti audio professionali</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Installazione e configurazione di attrezzature audiovisive</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Supporto tecnico on-site durante gli eventi</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Consulenza tecnica per eventi</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Vendita di attrezzature e accessori</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Preventivi e Prenotazioni</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I preventivi forniti sono validi per 30 giorni dalla data di emissione. La prenotazione è confermata
                solo dopo il pagamento dell'acconto richiesto, salvo diversi accordi contrattuali.
              </p>
              <p>
                Le richieste di preventivo possono essere inviate tramite il form di contatto sul sito web,
                via email o telefonicamente. Ci impegniamo a rispondere entro 24-48 ore lavorative.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Prezzi e Pagamenti</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Tutti i prezzi sono espressi in Euro e sono comprensivi di IVA dove applicabile.
                Salvo diverso accordo, è richiesto:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>50% di acconto al momento della conferma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Saldo entro 7 giorni dalla data dell'evento</span>
                </li>
              </ul>
              <p className="mt-4">
                I pagamenti possono essere effettuati tramite: bonifico bancario, carta di credito/debito, contanti
                (nei limiti di legge).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellazioni e Modifiche</h2>
            <div className="bg-gray-900 rounded-lg p-6 space-y-4 text-gray-300">
              <p><strong className="text-white">Cancellazioni da parte del Cliente:</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• Oltre 30 giorni dall'evento: rimborso del 100% dell'acconto</li>
                <li>• Da 15 a 30 giorni: rimborso del 50% dell'acconto</li>
                <li>• Meno di 15 giorni: nessun rimborso</li>
              </ul>
              <p className="mt-4">
                Le modifiche alla prenotazione devono essere comunicate con almeno 7 giorni di anticipo.
                Modifiche sostanziali potrebbero comportare costi aggiuntivi.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Consegna e Ritiro</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                QuattroSound si impegna a consegnare e installare le attrezzature nei tempi concordati.
                Il cliente deve garantire l'accesso alla location e condizioni adeguate per l'installazione.
              </p>
              <p>
                Il ritiro delle attrezzature avverrà entro 24 ore dalla conclusione dell'evento,
                salvo diversi accordi. Il cliente è responsabile della custodia delle attrezzature
                fino al momento del ritiro.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Responsabilità del Cliente</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Il cliente è tenuto a:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Fornire informazioni accurate sulla location e sui requisiti dell'evento</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Garantire l'accesso elettrico adeguato</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Custodire le attrezzature noleggiate</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Comunicare tempestivamente eventuali problemi tecnici</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Risarcire danni causati da uso improprio o negligenza</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitazione di Responsabilità</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                QuattroSound non è responsabile per: ritardi o impossibilità di esecuzione dovuti a cause di forza maggiore,
                danni indiretti o perdite economiche del cliente, malfunzionamenti dovuti a condizioni ambientali avverse
                non previste, danni causati da terzi o dal cliente stesso.
              </p>
              <p>
                La responsabilità massima di QuattroSound è limitata all'importo del contratto.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Proprietà Intellettuale</h2>
            <p className="text-gray-300 leading-relaxed">
              Tutti i contenuti presenti sul sito web (testi, immagini, loghi, grafica) sono di proprietà di QuattroSound
              o concessi in licenza. È vietata la riproduzione, distribuzione o utilizzo non autorizzato dei contenuti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Privacy e Protezione dei Dati</h2>
            <p className="text-gray-300 leading-relaxed">
              Il trattamento dei dati personali è regolato dalla nostra{' '}
              <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a>.
              Utilizzando i nostri servizi, acconsenti al trattamento dei tuoi dati personali come descritto
              nella Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Risoluzione delle Controversie</h2>
            <p className="text-gray-300 leading-relaxed">
              In caso di controversie, le parti si impegnano a cercare una soluzione amichevole.
              In assenza di accordo, sarà competente il Foro di Roma. I presenti Termini e Condizioni
              sono regolati dalla legge italiana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Modifiche ai Termini</h2>
            <p className="text-gray-300 leading-relaxed">
              QuattroSound si riserva il diritto di modificare questi Termini e Condizioni in qualsiasi momento.
              Le modifiche saranno pubblicate sul sito web e entreranno in vigore immediatamente.
              L'uso continuato dei servizi dopo le modifiche costituisce accettazione dei nuovi termini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contatti</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Per domande riguardanti questi Termini e Condizioni, contattaci:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 space-y-2 text-gray-300">
              <p><strong className="text-white">QuattroSound</strong></p>
              <p>Via Monte Nero 36, 00012 Guidonia Montecelio (RM), Italia</p>
              <p>Email: <a href="mailto:info@quattrosound.it" className="text-cyan-400 hover:underline">info@quattrosound.it</a></p>
              <p>Telefono: <a href="tel:+393208980405" className="text-cyan-400 hover:underline">+39 320 898 0405</a></p>
              <p>P.IVA: IT12345678901</p>
            </div>
          </section>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 text-center">
            <p className="text-cyan-300">
              Utilizzando i nostri servizi, dichiari di aver letto, compreso e accettato i presenti
              Termini e Condizioni nella loro interezza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
