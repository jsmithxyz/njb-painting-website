import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./services.css";

class Services extends Component {
  render() {
    return (
      <div className='row-services'>
        <p className='services-header'>Our Services</p>
        <hr className='services-break'></hr>
        <Row>
          <Col className='service-box'>
            <img
              src='data:image/png;base64,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'
              alt='Painting Services'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Painting Services</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
          <Col className='service-box'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADgElEQVR4nO2aTUgVURTHZ0xCMAppES7cSCAt3NgmnxLSIqlUWrRoEdKmWoVLXQZJ5LKPXcva1SKoFAINSqEPsGVEEJZGREWkfViavxae17u+N/PevTP3zU29fxgc7z3nf/7nzJ0zH2+CwMPDw8PDI1MAzcBzYBpodq0nUwCdwAcK+AwccK1LG8AYMJrQ9wzwWxK/Ixsydtq21qogf9gMfWqBK8pRHwFqZBtRxi8DtdXSbgWmBQC2A3fFbRE4GWFzHPghNveBBquibcKkAMBu4IW4fAT2l7HdB7wX21fAHnuqLaK4AMAocC/Crhv4IubTQJMGd5PYIr4HbetPjYgClKwIYABYlqmbQL0Bf734ACwBAzb1p0a5ArDa7K7K0ApwEahJECMEBoE/wnUN2Gozj8SIKwCwE5iQ/Z/ACQuxjgHfhXMS2JWWMzXKFOC1/J0F2izGaxPOfIxWW9xJBcUVADSbXYKYjcBjibEAHLUdw0SMes4PKslfB+o0/HuBB8A32SaAHg2/OomB9IYhG/kYQ0n4hqkY4ILiPydbHsOaHEMUmqNW0a2iaMnPA32afr3iMwO0K+M54I3MVVwJ4tMnsZFTozFpPkYA9lK4vhs1JFn2qMkrczmZGzfga6VKjTcuYKpLEqvNa7bM/Bwwb8hp/dIbFcTKTYkUYK7M/DvgawJeKzdfceT1wC0hXybFbalypDoi5jpNT4EIjsS333GExQ8m3Sn5eoRrBsgp4x0UmuCRlDGMH8DiiNopPJq+BFrSCFN4hymg+DJ43lKMFtGM5FDSdCsR9LP64iIPqy8nZCWMS09YkP1URz4iRoOifxHo13EKgXMUwaawLFGcB3AJ2BJnvA24LYZLwNkNVIBTwC/ZHwN2RBk/E4NPQJdKkLVwW1D1A12SG8CTKONHwFOUHyk2UgHk/2bJ8WEigvUGXf127pjWMapeAOAwhTc6OpgFDlVbl45wK6eAYfJ5vHWu32IBjHiyjut7gGsBruEL4FqAa/gCuBbgGs4LAEwBk67ih3ETNq7FawKFYWSsfJz8fFZx83C+Alyj4gdJlSpYCRpHdDIIghKbDOJWJvC3wmsJS5qV7lgauIqr+y1QxbG0K6DacX0TNLCNala6Y2ngJu5maYKZfZfLf/r5679rLTAVBEGujO1GwFQYhp3qgNoEVzIW4wKbIUcPDw8PDw8PTfwFFrXDGhIK8EYAAAAASUVORK5CYII='
              alt='Clientele'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Clients</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='service-box'>
            <img
              src='data:image/png;base64,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'
              alt='Locations Serviced'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Locations Served</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
          <Col className='service-box'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADpUlEQVR4nO2Zz28NURTHz5WHrlpLFCssRYgfsehWrMRCaPwJfixELPzoSoJQ0rXUzq802EgsSOxKu6BNVFlY6iPRKguEpB+LOc8bfXNn7szc1yfv3W8yeW/OPefM935nzpn77hMJCAgICAgICAjoTBigS0QuishhEVndYj6+UBWRuyJyxhjzM9UTuE77YjBTKqCqzjv8iN96ALt0TjMuzgAsAa8lheu8lpW4wDjwoojNR3wOngAzwDWifpfoQOx83FJPi4k1KOxqKxvvwtEy3tATkp4A22NTqkyASeC7HpNlcqVwabAbY4yI7NbT/iRiiXcokwGMAc9tNmAFcDWm/i/gvR6/YvbLQMUlZ05+/8zLOs+iAmRcvAt4rKlngaNAd2y8BzgGzKnPQ2C5Zw6JAijqPaFJAgxr2tdAb4rfOmBKfYc8c0gToIZB7wIA+zRlFVjr4N8LfAQWgD6PPKwlQHyd0AQBXmnKgzli+jVm1CMPqwD/nPsUANij6aYAkyPOAG81dpsnLk4CFF4IWbBfP28aY5xFVd9hPT3gmVMqUgUgalIjwDc97gObUkJq79tnBbjUYvZ45JMNWwnoxWZrzUIP1JbY2Yka3wIFXmlE64YF4INlPBef0j1AlQY4rzVqgAG13bOQ/AnM5518LH4e+GEZy8XHhwDfVGUTsxm9y4mT9CRA4gZGXj6uAqT1AETEuZMrvohIN8VKYKWI9GgOX3wykSbAU4m2yP4+ciIyoLYnlphpiUhuKcClFvPOI59spJTAZuCzDs9Q3zmaBTZacl1Qn1MFeJzW2EuW8Vx8SvcAdeoF7gFf9RixTV79t2u6N+RfCL3T2N0pfs58vAhQBMCopjyUI+aIxrz0yKNlAvQRvc8/kvJLMOa/DvikNPZ65NEaATT5UKwU1qf4bQCm1feGZw4tFWA58EBTzwHHgZ7Y+CrgBPBFfR4RvQZ9cmiuAGTs4AIVou2uGn5T3xL7HbNfQdcNWTmXRACatCsMTFDfFJ3IG58gSipHVwEqSeIl2NLsTjDGbF00iTL5vHFsEMAYs8sxdlxEFgraSsXn4JgJU7sTun/eNlg8L9v5Mon+ShZgZ0uYNgHUV5PVLN+KiNwRkZMiMlauLP9L3MpyqIjIWf3eLyJrmkpn6VAVkdsici7LsaHuO60nJO0HdFRPSFoHdFRPSBKgo3pCZp23e09w+WeorXuCyxMwKFFPaEdcTeoBi9FRPSEgICAgICAgICAgoDPwB9srR1wu/BGLAAAAAElFTkSuQmCC'
              alt='Affordable Prices'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Affordable Prices</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
