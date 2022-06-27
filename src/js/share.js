const shareEffect = async (url, fileName) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], `${fileName}.mp3`, { type: 'audio/mpeg' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: `${fileName}`,
            });

            return;
        }

        alert('Seu navegador não suporta compartilhamento nativo ☹');
    } catch (error) {
        console.log('Falha ao tentar compartilhar.');
    }
}