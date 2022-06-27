const shareEffect = async (url, fileName) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], `${fileName}.mp3`, { type: 'audio/mpeg' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
            });

            console.log('compartilhado com sucesso');
            return;
        }

        console.log('navegador não suporta');
    } catch (error) {
        console.log('falha ao tentar compartilhar', error);
    }
}