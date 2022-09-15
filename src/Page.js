import styled from 'styled-components'
import React, { Component } from 'react'
import { MdLocalPhone, MdWeb, MdWork } from 'react-icons/md'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

class Page extends Component {
  state = {
    users: [],
    achievements: [],
  }

  addUser = () => {
    this.setState({
      users: [
        ...this.state.users,
        <Skill contentEditable='true' suppressContentEditableWarning={true}>
          Skill
        </Skill>,
      ],
    })
  }

  addAchievement = () => {
    this.setState({
      achievements: [
        ...this.state.achievements,
        <AchievementName
          contentEditable='true'
          suppressContentEditableWarning={true}
        >
          Achievement
        </AchievementName>,
        <AchievementDescription
          contentEditable='true'
          suppressContentEditableWarning={true}
        >
          add description
        </AchievementDescription>,
      ],
    })
  }

  render() {
    return (
      <>
        <PageContainer>
          <Name contentEditable='true' suppressContentEditableWarning={true}>
            Attinder Singh
          </Name>
          <HeadContainer>
            <ContactItem>
              <MdLocalPhone />
              <h5 contentEditable='true' suppressContentEditableWarning={true}>
                0449066237
              </h5>
            </ContactItem>
            <ContactItem>
              <MdWeb />
              <h5 contentEditable='true' suppressContentEditableWarning={true}>
                www.codesingh.dev
              </h5>
            </ContactItem>
            <ContactItem>
              <AiOutlineMail />
              <h5 contentEditable='true' suppressContentEditableWarning={true}>
                attinderkahlon@gmail.com
              </h5>
            </ContactItem>
            <ContactItem>
              <AiFillLinkedin />
              <h5 contentEditable='true' suppressContentEditableWarning={true}>
                linkedin.com/in/attinder18
              </h5>
            </ContactItem>
          </HeadContainer>
          <hr />

          <BodyContainer>
            <LeftDiv>
              <SkillsContainer>
                <Heading
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  TECHNICAL SKILLS{' '}
                </Heading>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  JavaScript
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  React / Redux
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  SASS / styled-components
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Git
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  HTML5 / CSS3
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  REST / Fetch and Axios API call
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  AWS Amplify / S3
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Google Firebase / Firestore
                </Skill>
                {this.state.users}
                <Heading
                  style={{ marginTop: '30px' }}
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  ACHIEVEMENTS
                </Heading>
                <AchievementName
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  React JS Program, Web development
                </AchievementName>
                <AchievementDescription
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Certification of completion
                </AchievementDescription>
                <AchievementName
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Modern Javascript
                </AchievementName>
                <AchievementDescription
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Certification of completion
                  <a
                    href='https://www.udemy.com/certificate/UC-5abef72f-24ab-45eb-a522-b4747b2724a2/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Certificate
                  </a>
                </AchievementDescription>
                <HeightSpacer />
                {this.state.achievements}
                <HeightSpacer />
                <Heading
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  PROFESSIONAL SKILLS
                </Heading>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Responsive Web Design Concepts
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Time Management
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Team Work
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Clear Communication and Interpersonal skills
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  HTML5 / CSS3
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Critical and analytical thinking
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Troubleshooting and debugging
                </Skill>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Customer service
                </Skill>
                <HeightSpacer />
                <HeightSpacer />
                <Heading
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  REFERENCE
                </Heading>
                <Skill
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  Contact Mahmoud - 0423728970
                </Skill>
              </SkillsContainer>
            </LeftDiv>

            <RightDiv>
              <RightParent>
                <HeadSection
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  <FaGraduationCap />
                  <Heading>EDUCATION</Heading>
                </HeadSection>

                <BodySection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      React JS
                      <span>2022</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      General Assembly - Melbourne, Australia
                    </ContentRightDiv>
                    <HeightSpacer />
                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Diploma in IT
                      <span>2018-2019</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Upskilled - Melbourne, Australia
                    </ContentRightDiv>
                    <HeightSpacer />
                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      B.Tech in Information technology
                      <span>2011-2015</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Punjab Technical University - PTU, India
                    </ContentRightDiv>
                  </Details>
                </BodySection>
              </RightParent>
              <br />

              <RightParent>
                <HeadSection
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                >
                  <AiFillStar />
                  <Heading
                    contentEditable='true'
                    suppressContentEditableWarning={true}
                  >
                    LIVE PROJECTS
                  </Heading>
                </HeadSection>

                <BodySection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Personal Website (under development) -
                      <a
                        href='https:\\www.codesingh.dev'
                        target='_blank'
                        rel='noreferrer'
                      >
                        www.codesingh.dev
                      </a>
                      <span>September 2022 - Present</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Skills: ReactJS, AWS , SES, Amplify, tailwind, Firebase
                      Firestore
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • Developing portfolio website using ReactJS
                    </JobTasks>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • UPCOMING: Going to connect all my github projects in
                      this website. I will add email service as well in
                      "ContactMe" section using AWS services.
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Feedback form Web App for restaurant customers
                      <br />
                      <a
                        href='https://feedbackform2.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        https://feedbackform2.netlify.app
                      </a>
                      <span>2022</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Skills: ReactJS, HTML5, CSS3, Netflify
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • This is a feedback form app calculating the score based
                      on feedback.
                    </JobTasks>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • <span style={{ color: 'red' }}>Bonus:</span> This app is
                      created with class components in React Js.
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Crypto Tracker -
                      <a
                        href='http://ga-crypto.s3-website-ap-southeast-2.amazonaws.com/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        http://ga-crypto.s3-website-ap-southeast-2.amazonaws.com
                      </a>
                      <span>2022</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Skills: Typescript, CoinGecko API with AXIOS, ReactJs,
                      Tailwind, Amazon AWS S3
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • This is a crypto tracker website build with typescipt.
                      We can search crypto coins and when we click on a coin it
                      will take us to another page and show the price graph for
                      that coin.
                    </JobTasks>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • I used tailwind to style the website. It is a fully
                      responsive website.
                    </JobTasks>
                    <HeightSpacer />
                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Metric/Imperial Unit Conversion -
                      <a
                        href='https://unitconverter2.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        https://unitconverter2.netlify.app/
                      </a>
                      <span>2022</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Skills: JavaScript, CSS, Netflify, Git
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      • It is a unit converter. I created this website using
                      Vanilla. javascript.
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable='true'
                      suppressContentEditableWarning={true}
                    >
                      Basketball scoreboard -
                      <a
                        href='https://scoreboardb.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        https://scoreboardb.netlify.app
                      </a>
                      <span>2022</span>
                      <JobTasks
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                      >
                        • This is basketball based scoreboard build using
                        vanilla Javascript and plain CSS.
                      </JobTasks>
                    </TitleRightDiv>
                  </Details>
                </BodySection>
                <br />
                <RightParent>
                  <HeadSection
                    contentEditable='true'
                    suppressContentEditableWarning={true}
                  >
                    <MdWork />
                    <Heading>EMPLOYMENT HISTORY</Heading>
                  </HeadSection>

                  <BodySection>
                    <Divider></Divider>
                    <Details>
                      <TitleRightDiv
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                      >
                        Frontend Developer – Fateh Fitness Studio
                        <span>March 2020 - 2021</span>
                      </TitleRightDiv>

                      <JobTasks
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                      >
                        • Developing React website for the studio. Currently
                        live on www.fatehfitness.in
                      </JobTasks>
                      <JobTasks
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                      >
                        • Create wireframes and prototypes using AdobeXd and
                        create components and UI based on that.
                      </JobTasks>
                      <JobTasks
                        contentEditable='true'
                        suppressContentEditableWarning={true}
                      >
                        • Built APIs using Node.js, manage AWS services like
                        Amplify, Code Pipeline, S3.
                      </JobTasks>

                      <HeightSpacer />

                      <HeightSpacer />
                    </Details>
                  </BodySection>
                </RightParent>
              </RightParent>
            </RightDiv>
          </BodyContainer>
        </PageContainer>

        <AddSkillBtn onClick={this.addUser}>ADD SKILL</AddSkillBtn>
        <AddAchievementBtn onClick={this.addAchievement}>
          ADD ACHIEVEMENT
        </AddAchievementBtn>
      </>
    )
  }
}

export default Page

const PageContainer = styled.section`
  background: white;
  display: block;
  margin: 0.5cm auto;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 210mm;
  height: 284mm;
  padding: 16px;

  @media print {
    box-shadow: none;
  }

  /* [contenteditable] {
    outline: none;
  } */
`

const HeightSpacer = styled.div`
  height: 14px;
`

const Name = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-family: var(--title-font);
  text-transform: uppercase;
  /*  */
  /* -webkit-user-modify: read-write;
  -moz-user-modify: read-write; */
`

const HeadContainer = styled.div`
  /* n; */
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 6px;
  margin-top: 2px;
`

const ContactItem = styled.div`
  margin: 6px 0;
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    margin-right: 4px;
  }

  p {
    line-height: 3px;
    font-size: 0.8em;
  }
`

const LeftDiv = styled.div`
  display: flex;
  height: 100%;
  width: 22%;
`

const RightDiv = styled.div`
  display: flex;
  height: 100%;
  width: 78%;
  flex-direction: column;
`

const RightParent = styled.div``

const BodyContainer = styled.div`
  display: flex;
  height: auto;
  margin-top: 20px;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Skill = styled.h5`
  font-size: 12px;
  text-align: center;
  color: var(--secondary-color);
  margin-top: 9px;
`

const Heading = styled.h4`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: var(--title-font);
`

const AddSkillBtn = styled.button`
  position: fixed;
  padding: 12px;
  left: 30px;
  bottom: 76px;
  height: 36px;
  color: white;
  border-width: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: var(--accent-color);

  :active {
    bottom: 79px;
  }
`

const AddAchievementBtn = styled.button`
  position: fixed;
  padding: 12px;
  left: 30px;
  bottom: 26px;
  height: 36px;
  color: white;
  border-width: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: var(--accent-color);

  :active {
    bottom: 29px;
  }
`

const BodySection = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
`

const HeadSection = styled.div`
  display: flex;

  svg {
    display: block;
    height: auto;
    width: 22px;
    margin-right: 14px;
  }

  h4 {
    justify-content: start;
  }
`

const Divider = styled.div`
  margin: 12px 24px 1px 8px;
  // border-radius: 100%;
  width: 2px;
  height: auto;
  background-color: lightgray;
`

const TitleRightDiv = styled.h5`
  font-size: 14px;
  font-weight: 900;
  margin-top: 7px;

  span {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 100;
    color: grey;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentRightDiv = styled.h6`
  color: grey;
  font-weight: 600;
  font-size: 12px;
  margin-top: 4px;
`

const JobTasks = styled.div`
  color: var(--secondary-color);
  font-weight: 600;
  font-size: 12.2px;
  margin-top: 4px;
`
const AchievementName = styled.h5`
  font-size: 12px;
  margin-top: 11px;
  text-align: center;
  color: var(--secondary-color);
`
const AchievementDescription = styled.p`
  text-align: center;
  font-size: 12px;
  color: grey;
`
