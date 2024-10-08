import React from 'react';
import './FAQ.css'; // Import your CSS file for styling

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      
      <div className="faq-item">
        <h2 className="faq-subtitle">Assessment and Legal Ownership</h2>
        <p>
          <strong>Who oversees property valuation, and who legally holds the asset title post-tokenization?</strong><br />
          The valuation process for tokenized assets is consistent with traditional finance, as accredited, independent third-party appraisers handle it to ensure fair market valuations that meet regulatory standards.
        </p>
        <p>
          Legal ownership of the underlying real estate asset remains with the original asset holder/issuer after tokenization. Token holders gain an economic interest or ownership stake in the asset's performance but do not receive governance rights or legal title to the physical property. The specifics of ownership can vary depending on the regulatory framework. For instance, in a Reg D offering, the issuer retains full control and ownership, whereas in a Reg A+ offering, a neutral third party may hold the deed. At <em>Yeshara</em>, we work closely with clients to ensure compliant structuring that aligns with their needs.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Asset Tokenization Flexibility</h2>
        <p>
          <strong>Can only a portion of an asset be tokenized?</strong><br />
          Yes, tokenizing only a portion of a real estate asset is possible and is often done. This allows the issuer to raise capital through tokenization while retaining control over property decisions. We can tokenize any percentage of an asset, whether it’s 10%, 50%, or 90%, offering flexibility based on a client’s capital requirements and strategic goals.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Benefits and Costs of Tokenization</h2>
        <p>
          <strong>Why should I consider tokenization over traditional methods, and what are its costs?</strong><br />
          Tokenization offers several advantages over traditional financing methods. It democratizes real estate investment, allowing retail investors to participate with smaller minimum investments. Tokenization enhances transaction efficiency by providing liquidity options and eliminating the discounts often applied to illiquid deals, thus offering issuers better returns. It also streamlines administrative tasks using smart contracts and blockchain-based record-keeping. Costs depend on asset value and other factors, though subsequent tokenizations tend to be less expensive. Additional costs such as legal, escrow, and brokerage fees may apply. While not always cheaper than traditional financing, tokenization opens new capital sources and liquidity opportunities.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Corporate Structure for Tokenization</h2>
        <p>
          <strong>What corporate structures are typically adopted for tokenization?</strong><br />
          Various corporate structures can support tokenization, depending on the specific project. Commonly used entities include LLCs, LPs, onshore corporations, and offshore entities. For fund-related projects, LPs or LLCs are often preferred. At <em>Yeshara</em>, we collaborate with legal counsel to determine the optimal, compliance-driven structures that align with client goals.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Dividends and Financials</h2>
        <p>
          <strong>How do tokenized dividends differ from regular dividends?</strong><br />
          Tokenized dividends differ in that they are automatically distributed via blockchain, using smart contracts to ensure transparency and efficiency. Traditionally, dividends involve manual calculations and bank transfers, which can lead to delays. Tokenized dividends, however, are paid instantly to investor wallets, typically in stablecoins, and can be distributed more flexibly, for instance, in daily, weekly, or monthly intervals, or based on a specific dividend pool threshold. This offers a more streamlined and efficient dividend distribution process compared to traditional methods.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Integration with Platforms</h2>
        <p>
          <strong>How do investors access the tokenization platform?</strong><br />
          At <em>Yeshara</em>, our platform simplifies operations, offering an easy onboarding process for investors, including Know Your Customer (KYC) and Anti-Money Laundering (AML) checks. Investors can quickly connect their wallets, fund projects, and manage their portfolios. 
        </p>
        <p>
          <strong>How does <em>Yeshara</em> connect to secondary exchanges?</strong><br />
          We integrate our platform with secondary exchanges to enable seamless secondary trading for token holders. We also explore partnerships to list clients' tokens on exchanges that align with their investor base, ensuring compliance and smooth integration for both initial investors and those in the secondary market.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Investor Management</h2>
        <p>
          <strong>Can you provide access to retail/non-accredited investors?</strong><br />
          Yes, we can accommodate retail and accredited investors in tokenization projects. This depends on structuring the offering in a compliant manner. <em>Yeshara</em> advises clients on the best approach to meet their goals and investor access requirements.
        </p>
        <p>
          <strong>How are dividend distributions handled?</strong><br />
          Once an asset generates dividends, distributions are automated on the blockchain, typically as stablecoins sent to investor wallets. Distributions can be scheduled based on time intervals (e.g., monthly or quarterly) or capital thresholds (e.g., $500k or $1m), according to the client’s preferences and the asset’s performance. Smart contracts automate the process, reducing administrative tasks.
        </p>
        <p>
          <strong>How do we provide liquidity for investors and the company?</strong><br />
          Tokenization helps overcome liquidity challenges commonly associated with traditional real estate by enabling fractional ownership and secondary trading. Once tokens are issued, they can be resold through regulated security token exchanges, allowing issuers to tap into a larger pool of global investors. We advise on token mechanics such as lock-up periods and volume restrictions, helping enhance liquidity while ensuring compliance.
        </p>
        <p>
          <strong>What is the onboarding process like for investors?</strong><br />
          The onboarding process at <em>Yeshara</em> is designed to be simple and efficient. Investors create an account and go through standard KYC and AML checks, similar to opening an online investment account. For specific issuances, we also handle accreditation. Once approved, investors can easily invest in tokenized real estate opportunities.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Legal and Ownership</h2>
        <p>
          <strong>Does tokenization provide direct ownership rights to the underlying real estate?</strong><br />
          At <em>Yeshara</em>, token holders receive economic rights to the performance of the underlying real estate, but do not gain direct ownership of the physical property or governance rights. While token holders benefit from the economic performance of a project, the issuer retains full legal ownership.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Liquidity and Trading</h2>
        <p>
          <strong>Does tokenization provide upfront capital raise?</strong><br />
          Yes, after a successful private sale, tokenization can provide upfront capital through an escrow structure built into the <em>Yeshara</em> platform. The process typically takes 4-6 months for the initial raise, though subsequent raises can be completed more quickly.
        </p>
        <p>
          <strong>How does trading work - is it only for accredited investors?</strong><br />
          Secondary trading can be open to accredited and non-accredited investors, depending on the offering's structure. For example, Reg D offerings are limited to accredited investors, whereas Reg A+ offerings can include retail investors. The exchanges must also satisfy AML/KYC requirements. <em>Yeshara</em> aims to provide flexibility within regulatory guidelines to ensure a successful issuance.
        </p>
        <p>
          <strong>How fungible/tradable are the tokens?</strong><br />
          Tokens are designed to be as tradable as legally possible. After lock-up periods, they can be traded on supported secondary exchanges or transferred peer-to-peer. Liquidity and price discovery are facilitated by regulated venues, though large trades may still occur over-the-counter (OTC) given the early stage of security token adoption.
        </p>
        <p>
          <strong>How tradable are these tokens in secondary markets?</strong><br />
          Secondary market liquidity for tokenized real estate is growing, with platforms like INX, tZERO, Securitize, and Archax offering regulated venues for trading. While large block trades may occur OTC, secondary market adoption is quickly advancing.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Regulatory Compliance</h2>
        <p>
          <strong>How does tokenization comply with securities regulations?</strong><br />
          <em>Yeshara</em> adheres to regulatory compliance through stringent KYC and AML checks and by offering tokenized assets that meet applicable securities laws, such as Reg D and Reg A+. Each project is structured in collaboration with legal counsel to ensure compliance and transparency.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-subtitle">Additional Information</h2>
        <p>
          <strong>How is investor data managed?</strong><br />
          Investor data is securely managed through <em>Yeshara</em>'s platform, with strong cybersecurity measures in place. KYC and AML data are stored securely and only shared with necessary regulatory authorities.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
