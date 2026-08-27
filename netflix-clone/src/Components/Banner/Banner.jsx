// T-10 — Banner Data Fetching & Random Selection

const [movie, setMovie] = useState(null);

useEffect(() => {
    const fetchBannerMovie = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}${requests.fetchTrending}`
            );

            const data = response.data;

            if (data.results && data.results.length > 0) {
                const randomMovie =
                    data.results[
                    Math.floor(Math.random() * data.results.length)
                    ];

                setMovie(randomMovie);
            }
        } catch (error) {
            console.error("Banner API Error:", error);
        }
    };

    fetchBannerMovie();
}, []);

