import { Collapse } from "antd";
const { Panel } = Collapse;
import "../styles/statementofconcern.css";

export default function StatementOfConcern() {
  return (
    <>
      <div>
        <h1 id="statement-of-concern-heading">Statement of Concern</h1>
        <p id="statement-of-concern-paragraph">
          There is a growing concern about Generative AI's effect on software
          development and it's leading to growing distress not just to software
          engineers but to anyone who constitutes a knowledge worker. I'm unsure
          of its effect on other roles and industries but I'd like to share my
          take on software engineering based on my years of experience working
          in this field.
        </p>
        <p id="statement-of-concern-paragraph">
          For the most concerning, I'm seeing software engineers struggle with
          the proliferation of poor code quality they have to work with, with
          the perception that AI can produce what looks like production grade
          software with just a few prompts disrupting the software industry.
        </p>
        <p id="statement-of-concern-paragraph">
          It's because of this that many who are experienced in the field are
          concerned that someone senior who makes management decisions might get
          the wrong idea of what this new technology is and decide it is a
          replacement of their knowledge workers. That belief led to lots of
          layoffs. On a more reassuring note, we're seeing a lot of companies
          rehiring to clean up the mess that AI has generated. Usually requiring
          to rehire these people at a higher salary than before, whether they
          are the same or different people.
        </p>
        <p id="statement-of-concern-paragraph">
          Here, I want to emphasize that it'll probably take a long while for
          anyone to build an AI that can replace technical and knowledge work
          where certainty is required, if replacement is even ever possible.
        </p>
        <p id="statement-of-concern-paragraph">
          One of the reasons why AI must be supervised by someone who knows is
          because it's not possible for AI to be a 100% correct on all outputs
          they give. AI is trained on data from anywhere the AI company can get
          their hands on and this usually means taking in both accurate and
          inaccurate data. Not just that, even with a 100% accurate data, the
          generated result could still be wrong. AI is going to always
          hallucinate at times and any task that requires to be correct will
          always be required to be checked. An example of what an incorrect
          result can lead to is creating more work for the team to fix in
          future. Just like how it's usually quicker to create from the
          programmer's expertise with the use of AI as a tool, it is going to be
          slower to fix a huge chunk of code that requires the engineer to
          understand it before fixing it. Understanding badly written code may
          range from being time-consuming to being nearly impossible. It could
          happen in development where one line's change of code fix takes up to
          a week because of how elusive it is to identify the actual error. In
          debugging, an error may lead to the compiler flagging multiple errors
          where fixing the actual error removes all flagged errors. That's why
          the more complex the AI slop is, the more reason to build the
          application or feature from scratch. This is a case of it's faster if
          we get it right from the start, so we don't have to spend time fixing
          it later.
        </p>
        <p id="statement-of-concern-paragraph">
          As the threat of cybersecurity increases, especially with AI now also
          being open source and in anyone's hands, it's important that a
          programmer goes through all the AI generated code before using it to
          fix what needs to patched up. Reading codebase that is created with
          best practises will be quicker and easier than from codebase that is
          unnecessarily complex. Someone without the know-how of programming,
          might also accept and pass-on code that isn't suitable and add it into
          the codebase leading to possible challenges in the future.
        </p>
        <p id="statement-of-concern-paragraph">
          All these led me on to figure out how I believe our approach to
          software engineering should be where we're balancing the use of AI,
          while being able to continually ensure the code we submit to our Tech
          Leads remains high quality. I've added here some of the software
          development best practises for your understanding and I'll continue
          after my approach to software engineering.
        </p>
        https://geeksprogramming.com/key-principles-in-software-and-acronyms/
        <Collapse accordion bordered={false}>
          <Panel header="DRY  - Don't Repeat Yourself" key="1">
            DRY - Don't Repeat Yourself
          </Panel>
          <Panel header="KISS  - Keep It Simple, Stupid" key="2">
            KISS - Keep It Simple, Stupid
          </Panel>
          <Panel header="YAGNI  - You Aren't Gonna Need It" key="3">
            YAGNI - You Aren't Gonna Need It
          </Panel>
          <Panel
            header="SOLID  - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation & Dependency Inversion"
            key="4"
          >
            SOLID - Single Responsibility, Open/Closed, Liskov Substitution,
            Interface Segregation & Dependency Inversion
            <Collapse accordion bordered={false}>
              <Panel header="Single Responsibility" key="1">
                Single Responsibility
              </Panel>
              <Panel header="Open/Closed" key="2">
                Open/Closed
              </Panel>
              <Panel header="Liskov Substitution" key="3">
                Liskov Substitution
              </Panel>
              <Panel header="Interface Segregation" key="4">
                Interface Segregation
              </Panel>
              <Panel header="Dependency Inversion" key="5">
                Dependency Inversion
              </Panel>
            </Collapse>
          </Panel>
        </Collapse>
        <p id="statement-of-concern-paragraph">
          The key to engineering any software is to be mindful and in control of
          the process. If there's any research I require to do, I will do it
          with AI or with Search Engines, where any use of AI, if justified,
          should require me checking its sources and recommendations because
          working with the wrong information could lead to growing mistakes that
          will only be found out a long way later. To quicken our development,
          we need to ensure the foundation we work on top of, remains correct so
          we don't have to redo something caused by a shaky foundation that
          happened earlier.
        </p>
        <p id="statement-of-concern-paragraph">
          In software engineering, we usually have an idealised and most optimal
          way to write the code. After writing that out, we use our
          understanding of programming to customise it further while ensuring no
          bugs and being able to fulfil all requirements. All these must be done
          while the code remains maintainable and scalable yet ensuring
          vulnerabilities are patched up because cyberattacks are a threat the
          more users and mission critical data we have on this product.
        </p>
        <p id="statement-of-concern-paragraph">
          For me, to be in control where I use AI as a tool not as an AI worker
          that requires me to check all its work, I need to engineer the
          software in a manner where I move closer to completion, step-by-step,
          going through what I program into the codebase carefully. It's because
          I know AI can't produce a 100% correct code at all times, that I must
          understand the code it produces the more complex the code it produces
          is. Often, exclusive Generative AI users might not be able to even
          write a prompt with every software engineering practice wanted and
          achieve every specific preference or produce a complex product that
          will be sufficient and production grade. Generative AI can't read our
          minds, and less experienced software engineers may not even know what
          they do not know. There have been instances where after building the
          software product halfway, the team realises the need for more
          requirements and technical dead-end popping up. As the complexity of
          the product grows, the higher the complexity of the prompts we must
          make to it because we need to communicate all the specifics to the Gen
          AI. It also requires a lot of checking. As the person checking the
          code must know programming, they pretty much can already build the
          software quicker instead of relying on AI through only prompting. The
          approach I use is to break problems into chunks, then use a mix of AI
          and search to advise on how to fix a bug or build a feature if I don't
          already know it, this repeats until the final is achieved. I may take
          a break from coding and our programming Gods might hand me the
          solution just like that. Odd, but it happens to a lot of us software
          engineers, I swear! The software engineer should always remain in
          control of his development process.
        </p>
        <p id="statement-of-concern-paragraph">
          This is why we need to go through what AI produces, not because no one
          completely understands how AI works but because AI will never produce
          a perfect answer all the time. Despite that, if the person knows
          enough, building a software step-by-step with the help of AI and
          research is going to be the quicker way, than to create an entire
          product with only AI and expect it to be exactly how we want it to be.
        </p>
        <p id="statement-of-concern-paragraph">
          This is why in software engineering; we cannot only be
          result-oriented. Apart from this, programming languages are created to
          be an as-easy-to-pick-up and use, while balancing complex
          customisability and versatility. Programming languages may have
          mathematical applications, but they are still a textual interface
          where we simply define to the computer exactly how we want the
          software product to be. If there is a more precise and optimal
          programming language that is easier to learn while enabling engineers
          to define how a software should be with precision, that technology
          will likely just be another high-level programming language.
        </p>
        <p id="statement-of-concern-paragraph">
          From what I'm seeing, if we were to work with AI through prompting
          only, we will always require someone with the knowledge to not miss
          out on anything that makes up a production grade software product.
          We're usually unaware of what we don't know, and no one knows either
          if we know what they don't know because we can't verify it if we don't
          know it either. I'd argue that it's always faster for the person with
          the technical knowledge to continue interacting to the computer on
          what exact software product we want and build up the software using
          programming languages while assisted by AI programming tools and our
          very own due dilligence.
        </p>
        <p id="statement-of-concern-paragraph">
          The problem with Generative AI is that it's not always correct.
        </p>
      </div>
    </>
  );
}
