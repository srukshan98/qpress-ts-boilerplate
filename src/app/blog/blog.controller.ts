import { Route, HTTPStatusCode, RequestMapping, RequestType } from '@qpress/core';

@Route('blog')
export class BlogController {

    @RequestMapping(RequestType.GET, '/:id')
    public FindById(id: any): any {
        const blog = list.find((obj) => obj.id === parseInt(id, 10));

        if (blog) {
            return {
                Content: blog,
            };
        } else {
            return {
                StatusCode: HTTPStatusCode.NotFound,
            };
        }
    }

    @RequestMapping()
    public ListAll(): any {
        return {
            Content: list,
        };
    }
}

const list: any[] = [
    {
        id: 1,
        name: 'Black Lives Matter.',
        content: `
            Your contribution is critical to our efforts to end mass
            incarceration and excessive punishment in the United States,
            challenge racial and economic injustice, and protect the
            basic human rights for the most vulnerable people in American
            society.  Thank you!
        `,
    },
    {
        id: 2,
        name: 'Optimize Images with a GitHub Action',
        content: `
            There is an action for this already, Calibre's image-actions,
            which we'll leverage here. You'll also need to ensure Actions
            is enabled for the repo. I know in my main organization we only
            flip on Actions on a per-repo basis, which is one of the options.
        `,
    },
    {
        id: 3,
        name: 'First reputable Pixel 5 renders leak showcasing familiar design.',
        content: `
            The first reputable Pixel 5 renders have now leaked, showcasing
            what looks to be a remix of a very familiar design seen previously.

            We've already seen some less reliable renders appear online, but
            this time around, renders have come courtesy of the man with the
            best track record to date. Steve Hemmestoffer, aka, @OnLeaks shared
            the high-resolution renders in collaboration with Indian outlet
            PriceBaba.
        `,
    },
];